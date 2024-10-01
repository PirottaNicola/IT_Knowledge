package esercizi

import (
	"fmt"
	"math"
	"math/rand"
)

// we can declare variable at package level and then use them in the functions of the package (esercizi)
var packageName = "esercizi"

// GenerateRandomNumber generates a random number between 0 and the parameter max passed as argument
func GenerateRandomNumber(max int) {
	fmt.Printf("Generating a random number between 0 and %d: %d \n", max, rand.Intn(max))
}

func SquareRoot(x int) {
	fmt.Printf("The square root of %d is %f\n", x, math.Sqrt(float64(x)))
	// using Printf i can use %d for integers and %f for float numbers. The first argument is the format string, the following arguments are the values to be formatted
}

func Sum(x, y int) int {
	// se devo dichiarare due variabili con lo stesso tipo posso metterle in fila e poi mettere il tipo
	return x + y
}

// una funzione può ritornare qualsiasi numero di risultati
func ReverseOrder(x, y, z string) (string, string, string) {
	return z, y, x
}

// type conversion
func TypeConversionExamples() {
	var x int = 10
	var y float64 = float64(x) // conversion from int to float64
	var z uint = uint(y)       // conversion from float64 to uint (unsigned int, only positive numbers)
	var a string = string(z)   // conversion from uint to string
	fmt.Println(x, y, z, a)
}

// constants
func ConstantsExamples() {
	// constants can be: character, string, boolean, or numeric values
	// cannot be declared using the := syntax
	const x = 10
	const y = 20
	// y = 30 will cause an error at compile time
	fmt.Println(x + y)
}

// for loop
func ForLoopExamples() {
	// for loop
	for i := 0; i < 10; i++ {
		fmt.Println(i)
	}

	// for loop with range
	// range returns two values: the index and the value
	// if i don't need the index i can use _ to ignore it
	slice := []int{1, 2, 3, 4, 5}
	for i, value := range slice {
		fmt.Printf("Index: %d, Value: %d\n", i, value)
	}

	// while loop
	i := 0
	for i < 10 {
		fmt.Println(i)
		i++
	}

	// infinite loop
	// for {
	// 	fmt.Println("ciao")
	// }
}

// if statement
func IfStatementExamples() {
	x := 10
	if x > 5 {
		fmt.Println("x is greater than 5")
	} else {
		fmt.Println("x is less than or equal to 5")
	}

	// if statement with initialization (small portion of code that is executed before the condition, only available in the if statement scope)
	if y := 10; y > 5 {
		fmt.Println("y is greater than 5")
	}

	// if else
	if x > 5 {
		fmt.Println("x is greater than 5")
	} else if x == 5 {
		fmt.Println("x is equal to 5")
	} else {
		fmt.Println("x is less than 5")
	}

	// switch statement
	switch x {
	case 1:
		fmt.Println("x is 1")
	case 2:
		fmt.Println("x is 2")
	default:
		fmt.Println("x is not 1 or 2")
	}
	// different from other languages, in go the break statement is not needed because it is implicit, it only executes the case that matches the condition

	// switch without a condition is the same as switch true
	x = 10
	switch {
	case x > 5:
		fmt.Println("x is greater than 5")
	case x == 5:
		fmt.Println("x is equal to 5")
	default:
		fmt.Println("x is less than 5")
	}

}

// esercizio square root algorithm
func SquareRootAlgorithm(x float32) float32 {
	var guess float32 = 1.0
	var current = guess

	// cycle until the difference between the current value and the previous value is less than 0.0000000000001
	for {
		previous := current           // store the previous value
		current = float32(guess)      // store the current value
		guess = (guess + x/guess) / 2 // calculate the new guess (newton's method)
		if float32(guess) == previous {
			break
		}
	}

	return current // return the square root
}
