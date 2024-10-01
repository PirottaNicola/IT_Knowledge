package esercizi

import (
	"fmt"
)

// print variable declared at package level in 01.go
func PrintPackageName() {
	fmt.Println(packageName)
}

// inside a function i can use := as a shorthand for var declaration and initialization
func PrintPackageNameWithShorthand() {
	packageName := "esercizi" // type is inferred from the value
	fmt.Println(packageName)
}
