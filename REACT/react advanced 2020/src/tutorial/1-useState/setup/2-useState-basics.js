import React, { useState } from 'react';
//useState() returns an array of 2 values: the current state AND the function to update it

const UseStateBasics = () => {
  const [text, setText] = useState('random title!'); //array destructuring: const [variable, setVariable] = useState(default value)

  const handleClick = () => {
    text === 'random title!' ? setText('hello world!') : setText('random title!');
  }

  return <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>change title</button>
  </React.Fragment>;
};

export default UseStateBasics;
