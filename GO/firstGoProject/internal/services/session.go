package services

import (
	"errors"
	"net/http"
)

// AuthError represents an error that occurs during authorization.
var ErrAuth = errors.New("Unauthorized")

func Authorize(r *http.Request) error {
	// Check if the user exists
	username := r.Header.Get("username") // we take the username from the request header
	user, ok := users[username]
	if !ok {
		return ErrAuth // user does not exist
	}

	//* Check Session Token
	// Check if the Session Token is not empty and if matches the user's token
	sessionToken, err := r.Cookie("session_token")
	if err != nil || sessionToken.Value != user.SessionToken {
		return ErrAuth // invalid session token
	}

	//* Check CSRF Token
	// we take the CSRF token from the request header instead of the cookie
	csrfToken := r.Header.Get("X-CSRF-Token")
	// Check if the CSRF Token is not empty and if matches the user's token
	if csrfToken != user.CSRFToken || csrfToken == "" {
		return ErrAuth // invalid CSRF token
	}

	// The client will include this token in the request headers, and the server will validate it before processing the request.
	// We set the httpOnly attribute to false, so the client can access the cookie and include it in the request headers.
	// The browser will only allow the original site to read the token from the cookie.
	// So if we receive a request with the x-csrf-token header, we can be sure that it was sent by the original site.

	// Authorization successful
	return nil

}
