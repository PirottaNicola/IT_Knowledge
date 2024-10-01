package utils

import (
	"crypto/rand"
	"encoding/base64"
	"log"

	"golang.org/x/crypto/bcrypt"
)

// HashPassword takes a plain text password as input and returns its bcrypt hash.
// It uses a cost factor of 10 for the hashing process.
// If the hashing operation is successful, it returns the hashed password as a string.
// If an error occurs during hashing, it returns an empty string and the error.
func HashPassword(password string) (string, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), 10)
	if err != nil {
		return "", err
	}
	return string(hash), nil // convert byte slice to string
}

// checkPasswordHash compares a plaintext password with a hashed password
// to determine if they match.
//
// Parameters:
// - password: The plaintext password to compare.
// - hash: The hashed password to compare against.
//
// Returns:
// - bool: True if the password matches the hash, false otherwise.
func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

// GenerateToken generates a random token of the specified length.
// It returns the token as a base64 encoded string.
// If there is an error during token generation, the function will log the error and terminate the program.
//
// Parameters:
// - length: The length of the token to be generated.
//
// Returns:
// - A base64 encoded string representing the generated token.
func GenerateToken(length int) string {
	token := make([]byte, length)
	_, err := rand.Read(token)
	if err != nil {
		log.Fatal(err)
	}
	return base64.StdEncoding.EncodeToString(token)
}
