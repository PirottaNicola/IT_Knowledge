package esercizi

import "math"

// go does not have classes, but you can define methods on types
// a method is a function with a special receiver argument
// the receiver appears in its own argument list between the func keyword and the method name
// in this example, the Abs method has a receiver of type Vertex named v

// Vertex struct
type Vertex struct {
	X, Y float64
}

// Abs method has a receiver of type Vertex named v
func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y) // Pythagorean theorem
}

// so a method is just a function with a receiver argument

// il tipo del receiver DEVE essere definito nello stesso package del metodo
// non è possibile definire un metodo con un receiver di un tipo definito in un altro package
