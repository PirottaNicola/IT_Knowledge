import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value > 0) {
      document.title = `new messages(${value})`
    }
  }, [value])

  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}>button</button>
  </>;
};

export default UseEffectBasics;
