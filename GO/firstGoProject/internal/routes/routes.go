package routes

import (
	"fmt"      // fmt is Go’s standard Input/Output library
	"net/http" // Package http provides HTTP client and server implementations.
)

func NewRouter() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("/", indexHandler) // http://localhost:8080/
	mux.HandleFunc("/hello", helloHandler) // http://localhost:8080/hello

	return mux
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Welcome to my website!")
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	data := "some data from the API"
	fmt.Fprintf(w, data)
}
