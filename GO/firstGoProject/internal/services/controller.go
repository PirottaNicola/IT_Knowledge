package services

import (
	"aTourOfGo/internal/routes"
	"aTourOfGo/internal/utils"
	"fmt"
	"net/http"
	"time"
)

type Login struct {
	HashedPassword string
	SessionToken   string
	CSRFToken      string
}

// key is username
var users = map[string]Login{}

func StartServer() {
	// REST API
	router := routes.NewRouter()

	// Endpoints
	http.HandleFunc("/register", register)
	http.HandleFunc("/login", login)
	http.HandleFunc("/protected", protected)
	http.HandleFunc("/logout", logout)
	http.ListenAndServe(":8080", nil) // Start the server

	port := ":8080"
	addr := fmt.Sprintf("localhost%s", port)
	fmt.Printf("Server running on port %s", addr)
	err := http.ListenAndServe(addr, router) // Start the server!
	// the ListenAndServe function is blocking, so the program will wait here until it is terminated

	if err != nil {
		panic(err) // panic is a built-in function that stops the ordinary flow of control and begins panicking (Go’s version of throwing an error)
	}

}

// register handles user registration requests. It expects a POST request with
// "username" and "password" form values. The function performs the following steps:
// 1. Checks if the request method is POST. If not, it responds with a 405 Method Not Allowed status.
// 2. Retrieves the "username" and "password" from the request form values.
// 3. Validates that both the username and password are at least 6 characters long. If not, it responds with a 400 Bad Request status.
// 4. Checks if the username already exists in the users map. If it does, it responds with a 409 Conflict status.
// 5. Hashes the password using the utils.HashPassword function.
// 6. Adds the new user to the users map with the hashed password.
// 7. Responds with a 201 Created status and a success message.
func register(w http.ResponseWriter, r *http.Request) {

	// Check if the request method is POST
	if r.Method != http.MethodPost {
		er := http.StatusMethodNotAllowed
		http.Error(w, "Invalid method", er)
		return
	}

	// Get the username and password from the request
	username := r.FormValue("username")
	password := r.FormValue("password")

	// validate the username and password length
	if len(username) < 6 || len(password) < 6 {
		er := http.StatusBadRequest
		http.Error(w, "Invalid username or password", er)
		return
	}

	// check if the user already exists
	if _, ok := users[username]; ok {
		er := http.StatusConflict
		http.Error(w, "User already exists", er)
		return
	}

	// Hash the password (so that we don't store it in plain text)
	hashedPassword, _ := utils.HashPassword(password)

	// Add the user to the users map
	users[username] = Login{
		HashedPassword: hashedPassword,
	}

	// Send a success response
	w.WriteHeader(http.StatusCreated)          // 201 Created
	fmt.Fprint(w, "User created successfully") // write the response body

	fmt.Println("Current users:", users)

}

func login(w http.ResponseWriter, r *http.Request) {

	if r.Method != http.MethodPost {
		er := http.StatusMethodNotAllowed
		http.Error(w, "Invalid method", er)
		return
	}

	username := r.FormValue("username")
	password := r.FormValue("password")

	// check if the user exists
	user, ok := users[username] // accessing a map returns two values: the value and a boolean indicating if the key exists
	// if username does not exists return error statusUnauthorized
	if !ok {
		er := http.StatusUnauthorized
		http.Error(w, "Invalid username", er)
		return
	}

	// check if the password is correct
	if !utils.CheckPasswordHash(password, user.HashedPassword) {
		er := http.StatusUnauthorized
		http.Error(w, "Invalid password", er)
		return
	}

	// Generate a session token
	sessionToken := utils.GenerateToken(32)
	user.SessionToken = sessionToken // set the session token for the user
	users[username] = user           // update the user in the map

	//* Set session cookie.
	//From now on, the client will send this cookie with every request, and the server can use it to identify the user.
	http.SetCookie(w, &http.Cookie{
		Name:     "session_token",
		Value:    sessionToken,
		Expires:  time.Now().Add(24 * time.Hour), // cookie expires in 24 hours
		HttpOnly: true,                           // cookie is not accessible via JavaScript (prevents XSS attacks)
	})

	// Introducing the session token we enabled a vulnerability called CSRF (Cross-Site Request Forgery).
	// To mitigate this vulnerability, we need to generate a CSRF token and send it to the client.
	// The client will include this token in the request headers, and the server will validate it before processing the request.

	// CSRF token generation
	csrfToken := utils.GenerateToken(16)
	user.CSRFToken = csrfToken // set the CSRF token for the user
	users[username] = user     // update the user in the map

	//* Set CSRF token cookie
	http.SetCookie(w, &http.Cookie{
		Name:     "csrf_token",
		Value:    csrfToken,
		Expires:  time.Now().Add(24 * time.Hour),
		HttpOnly: false, // cookie is accessible via JavaScript, so the client can include it in the request headers
	})

	// User correctly authenticated
	fmt.Fprint(w, "Login successful")

}

// this endpoint requires the user to be authenticated (logged in, with a valid session token and CSRF token --> checked using the Authorize function from session.go)
func protected(w http.ResponseWriter, r *http.Request) {
	// Check if the request method is POST
	if r.Method != http.MethodPost {
		er := http.StatusMethodNotAllowed
		http.Error(w, "Invalid method", er)
		return
	}

	// Check if the user is authorized
	if err := Authorize(r); err != nil {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	// Send a success response
	username := r.Header.Get("username")
	fmt.Fprintf(w, "Welcome, %s!", username)

}

func logout(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		er := http.StatusMethodNotAllowed
		http.Error(w, "Invalid method", er)
		return
	}

	// Check if the user is authorized
	if err := Authorize(r); err != nil {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	//* Clear user session
	// Clear the session token
	username := r.Header.Get("username")
	user := users[username]
	user.SessionToken = ""
	users[username] = user
	// Clear the session cookie
	http.SetCookie(w, &http.Cookie{
		Name:    "session_token",
		Value:   "",
		Expires: time.Now().Add(-time.Hour), // set the expiration time to the past to delete the cookie
	})

	// Clear the CSRF token
	user.CSRFToken = ""
	users[username] = user
	// Clear the CSRF cookie
	http.SetCookie(w, &http.Cookie{
		Name:    "csrf_token",
		Value:   "",
		Expires: time.Now().Add(-time.Hour), // set the expiration time to the past to delete the cookie
	})

	// Send a success response
	fmt.Fprint(w, "Logout successful")
}
