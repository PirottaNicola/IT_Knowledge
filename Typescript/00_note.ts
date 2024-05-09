// * custom types

interface Person {
  name: string // required
  age: number // required
  [key: string]: any // add more properties if needed
}

let person: Person = {
  name: 'Jack',
  age: 32,
  job: 'Developer', // add more properties
}

// * arrays

let numbers: number[] = [1, 2, 3]
let strings: string[] = ['a', 'b', 'c']

// * tuples (fixed length array)

let tuple: [string, number] = ['a', 1]

let personTuple: [string, number][] = [
  ['Jack', 32],
  ['Jane', 28],
]

// * functions

function add(a: number, b: number): number {
  return a + b
}

function printName(person: Person): void {
  console.log(person.name)
}

// * Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray
}
