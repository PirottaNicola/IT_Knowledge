package main

import (
	"fmt"

	"aTourOfGo/internal/esercizi"
	"aTourOfGo/internal/services"
)

func main() {

	// print hello world
	fmt.Println("Hello, World!")

	// Esercizi
	esercizi.GenerateRandomNumber(10)
	esercizi.SquareRoot(9)
	fmt.Println(esercizi.ReverseOrder("1", "2", "3"))
	fmt.Println(esercizi.SquareRootAlgorithm(9.11))

	esercizi.PointersIntroduction()
	esercizi.StructsIntroduction()
	esercizi.ArraysIntroduction()
	esercizi.WordCount("ciao sono un test di parole ciao ciao ciao parole")

	// i call the function Compute and pass a function that takes two float64 and returns a float64 as argument
	y := esercizi.Compute(func(f1, f2 float64) float64 {
		return f1 + f2
	})
	fmt.Println(y)
	x := esercizi.Compute(func(f1, f2 float64) float64 {
		return f1 * f2
	})
	fmt.Println(x)

	// closure
	esercizi.Fibonacci()
	f := esercizi.Fibonacci()
	for i := 0; i < 10; i++ {
		fmt.Println(f())
	}
	fmt.Println(f())

	// methods
	v := esercizi.Vertex{X: 3, Y: 4}
	fmt.Println(v.Abs())

	// REST API
	services.StartServer()
}
