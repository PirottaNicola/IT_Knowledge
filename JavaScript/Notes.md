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
