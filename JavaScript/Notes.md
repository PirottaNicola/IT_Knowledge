## Async Await

example of waiting for a promise to resolve before continuing

```js
export const getFruit = async (name) => {
  const fruits = {
    pineapple: '🍍',
    peach: '🍑',
    strawberry: '🍓',
  }

  return fruits[name]
}
getFruit('peach').then(console.log)

// Async + Await
export const makeSmoothie = async () => {
  /*
  const a = await getFruit('pineapple')
  const b = await getFruit('strawberry') 
  this is not optimal because we are waiting for one promise to resolve before starting the next one. We should go like this only if the second one depends on the first one
  */
  const smoothie = await Promise.all([
    getFruit('pineapple'),
    getFruit('strawberry'),
  ])
  // this is better because we are waiting for both promises to resolve at the same time
  return [a, b]
}

const makeSmoothie2 = () => {
  let a
  return getFruit('pineapple')
    .then((v) => {
      a = v
      return getFruit('strawberry')
    })
    .then((v) => [a, v])
}
```

Catching errors with async await its easym just wrap into a try catch block

# 100+ JavaScript Concepts you Need to Know

- it's the only code that natively runs in the browser without any transpilation, aside from Web Assembly
- it's **interpreted** line by line, but it's also compiled to machine code by the V8 engine using JIT (Just In Time) compilation
- ways to define a function:

  - function declaration:
    `function foo() {}`
  - function expression (anonymous):
    `const foo = function() {}`
  - arrow function:
    `const foo = () => {}`
  - async function:
    `async function foo() {}`

- **hoisting** is the process of moving function declarations to the top of the file, so that they can be used before they are defined (only function declarations are hoisted, not function expressions) (variables are also hoisted, but they are initialized with `undefined` instead of the actual value) (hoisting is a compile time process, not a runtime process)

- when passing parameters to a function, they are passed by value, **unless they are objects**, in which case they are passed by reference
