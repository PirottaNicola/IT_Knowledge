package esercizi

import (
	"fmt"
	"strings"
)

// POINTERS ---------------

// pointers are used to store the memory address of a value
// the zero value of a pointer is nil (null in other languages)
func PointersIntroduction() {
	// & operator generates a pointer to its operand
	i := 42
	p := &i         // point to i
	fmt.Println(*p) // read i through the pointer p
	fmt.Println(p)  // print the memory address of i
	*p = 21         // set i through the pointer p
	fmt.Println(i)  // see the new value of i

	// usecases: pass a memory address instead of a copy of a value, change the value of a variable through a reference (pointer)
	// pointers are used to share memory between different parts of a program

}

// STRUCTS ---------------

// Structs are collections of fields
// they are useful to group data together
// they are used to create custom data types
func StructsIntroduction() {
	// struct declaration
	type Person struct {
		name string
		age  int
	}

	// struct initialization
	p := Person{name: "Alice", age: 30}
	fmt.Println(p)

	// access fields with a dot
	fmt.Println(p.name)

	// pointers to structs
	pp := &p
	fmt.Println(pp.age)

	// struct fields can be accessed with a pointer to a struct
	pp.age = 51
	fmt.Println(p.age)

	type Vertex struct {
		X, Y int
	}

	var (
		v1 = Vertex{1, 2}  // has type Vertex (X:1, Y:2)
		v2 = Vertex{X: 1}  // Y:0 is implicit (X:1, Y:0)
		v3 = Vertex{}      // X:0 and Y:0 (X:0, Y:0)
		p4 = &Vertex{1, 2} // has type *Vertex (X:1, Y:2) (pointer to a struct)
	)

	fmt.Println(v1, v2, v3, p4)

}

// ARRAYS ---------------

// Arrays are fixed-size sequences of elements of the same type
func ArraysIntroduction() {

	// array declaration
	var a [2]string
	a[0] = "Hello"
	a[1] = "World"
	fmt.Println(a[0], a[1])
	fmt.Println(a)

	// array initialization
	primes := [6]int{2, 3, 5, 7, 11, 13}
	fmt.Println(primes)

	// a slice is a dynamically-sized view of an array (a slice does not store any data, it just describes a section of an underlying array)
	// a slice is a reference to a section of an array

	// slice declaration
	var s []int = primes[1:4] // [3, 5, 7], primo incluso, ultimo escluso
	fmt.Println(s)

	// altering the elements of a slice alters the elements of the underlying array
	// so other slices that share the same underlying array will also see the changes
	s[0] = 100
	fmt.Println(primes)

	// array of structs
	t := []struct {
		i int
		b bool
	}{
		{2, true},
		{3, false},
		{5, true},
		{7, true},
		{11, false},
		{13, true},
	}
	fmt.Println(t)

	// slice shorthands
	var e []int
	d := []int{1, 2, 3, 4, 5}
	e = d[0:5] // [1, 2, 3, 4, 5]
	e = d[:5]  // [1, 2, 3, 4, 5]
	e = d[0:]  // [1, 2, 3, 4, 5]
	e = d[:]   // [1, 2, 3, 4, 5]
	fmt.Println(e)

	// slice length and capacity
	// length is the number of elements in the slice
	// capacity is the number of elements in the underlying array, counting from the first element in the slice
	// the length and capacity of a slice s can be obtained with the expressions len(s) and cap(s)

	// slice length
	slice := []int{2, 3, 5, 7, 11, 13}
	fmt.Println(len(slice)) // 6

	// slice capacity
	slice = slice[:0]
	fmt.Println(len(slice)) // 0
	fmt.Println(cap(slice)) // 6

	// the zero value of a slice is nil (null in other languages)
	// a nil slice has a length and capacity of 0 and has no underlying array
	var z []int
	fmt.Println(z, len(z), cap(z)) // [] 0 0
	if z == nil {
		fmt.Println("nil!")
	}

	// creating a slice with make function (allocates a zeroed array and returns a slice that refers to that array)
	// make function takes a type, a length, and an OPTIONAL capacity
	// the capacity argument is optional and defaults to the length of the slice (make([]int, 5) is the same as make([]int, 5, 5))
	slice = make([]int, 5) // len=5, cap=5
	fmt.Println(slice)     // [0, 0, 0, 0, 0]

	// slice of slices
	// slices can contain any type, including other slices
	board := [][]string{
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
		[]string{"_", "_", "_"},
	}
	board[0][0] = "X"
	board[2][2] = "O"
	board[1][2] = "X"
	board[1][0] = "O"
	board[0][2] = "X"
	for i := 0; i < len(board); i++ {
		fmt.Printf("%s\n", board[i])
	}

	// append to a slice
	// the append function appends elements to the end of a slice
	// if the underlying array is too small to fit all the given values, a bigger array will be allocated and the slice will point to the new array

	var s1 []int
	fmt.Println(s1, len(s1), cap(s1)) // [] 0 0

	// append works on nil slices (a nil slice has a length and capacity of 0)
	s1 = append(s1, 0)                // [0]
	fmt.Println(s1, len(s1), cap(s1)) // [0] 1 1

	// the slice grows as needed (the capacity of the slice doubles when it runs out of space)
	s1 = append(s1, 1)                // [0, 1]
	fmt.Println(s1, len(s1), cap(s1)) // [0, 1] 2 2

	s1 = append(s1, 2, 3, 4)          // [0, 1, 2, 3, 4]
	fmt.Println(s1, len(s1), cap(s1)) // [0, 1, 2, 3, 4] 5 6

	// range function in the for loop
	var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}
	for i, v := range pow { // range returns two values: the index and the value
		fmt.Printf("2**%d = %d\n", i, v) // 2**0 = 1, 2**1 = 2, 2**2 = 4, 2**3 = 8, 2**4 = 16, 2**5 = 32, 2**6 = 64, 2**7 = 128
	}

	// if i don't need the index i or the value i can use _ to ignore it
	for _, value := range pow {
		fmt.Printf("%d\n", value) // 1, 2, 4, 8, 16, 32, 64, 128
	}

	// MAPS ---------------

	// maps are key-value pairs
	// maps are unordered collections
	// maps are reference types (a map is a reference to the data structure created with make)
	// the zero value of a map is nil (null in other languages)

	// map declaration
	var m map[string]int // nil map
	fmt.Println(m)       // map[]
	// m["key"] = 42 // error: assignment to entry in nil map

	// map initialization
	m = make(map[string]int) // empty map
	fmt.Println(m)           // map[]
	m["key"] = 42
	fmt.Println(m)      // map[key:42]
	fmt.Print(m["key"]) // 42

	// map literal (declare and initialize a map in one line)
	var n = map[string]int{
		"key1": 1,
		"key2": 2,
	}
	fmt.Println(n) // map[key1:1 key2:2]

	// delete a key-value pair from a map
	delete(n, "key1") // delete the key-value pair with key "key1"
	fmt.Println(n)    // map[key2:2]

	// check if a key is present in a map
	// if a key is not present in a map, the zero value of the value type is returned
	// if a key is present in a map, the value associated with the key is returned
	v, ok := n["key1"] // v is the value associated with the key, ok is a boolean that is true if the key is present in the map
	fmt.Println(v, ok) // 0 false

}

// riceve stringa in input, restituisce mappa {parola, numero di ripetizoni}
func WordCount(s string) map[string]int {
	// declare and initialize the map [parola:numero di ripetizioni]
	mappaParole := make(map[string]int)

	// array di parole ottenute splittando la stringa in input
	parole := strings.Fields(s)

	// ciclo sulle parole
	for _, parola := range parole {
		// se la parola è già presente nella mappa, incremento il contatore
		// altrimenti, la aggiungo alla mappa
		_, presente := mappaParole[parola] // presente è true se la parola è già presente nella mappa
		if presente {
			mappaParole[parola]++ // incremento il contatore
		} else {
			mappaParole[parola] = 1 // aggiungo la parola alla mappa
		}
	}

	fmt.Println(mappaParole)
	return mappaParole

}

// FUNCTIONS ---------------

// functions are values in Go
// functions can be passed as arguments to other functions
// functions can be returned from other functions (higher-order functions)
// functions can be assigned to variables (function literals)

// function that takes a function that takes two float64 arguments and returns a float64, and returns a float64
func Compute(fn func(float64, float64) float64) float64 {
	return fn(3, 4)
}

// closure
// a closure is a function value that references variables from outside its body
// the function may access and assign to the referenced variables
// the function is bound to the variables
// the function can be called in the future and will still access the variables that were in scope when the function was created
func Adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

// Adder returns a closure that is bound to the sum variable declared in the outer function
// the closure can access and modify the sum variable even after the outer function has finished executing

func Fibonacci() func() int { // fibonacci closure returns a function that returns an int
	a, b := 0, 1        // a and b are declared and initialized
	return func() int { // the closure returns a function that returns an int
		a, b = b, a+b
		return a
	}
}
