/*
const inputs = process.argv.slice(2);
const result = inputs.map(function(value) { return value[0]; })
    .reduce(function(prev, curr) { return prev + curr });

console.log(`[${inputs}] becomes "${result}")`) */

//ora scriviamo la stessa cosa ma utilizzando le arrow functions
const inputs = process.argv.slice(2);
const result = inputs.map((value) => value[0])
    .reduce((prev, curr) => prev + curr);

console.log(`[${inputs}] becomes "${result}")`)