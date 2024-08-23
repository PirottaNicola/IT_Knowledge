import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world'; //TEXT se TEXT è VERO, altrimenti HELLO WORLD
  // const secondValue = text && 'hello world';//'HELLO WORLD se TEXT è VERO, altrimenti NULLA



  return <>
    <h1>{text || 'john doe'}</h1>
    <button className='btn' onClick={() => setIsError(!isError)}>toggle error</button>
    {isError && <h1>error</h1>}
    {isError ? <p>explanation of the error</p> : <p>everything it's ok!</p>}
  </>;
};

export default ShortCircuit;
