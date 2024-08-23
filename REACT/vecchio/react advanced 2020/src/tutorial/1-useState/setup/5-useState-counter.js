import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    //setTimeout(() => {setValue(value + 1)}, 2000); if i do like this, if i press the button fast, it doesnt update the state before the 2 seconds!
    setTimeout(() => {
      setValue((prevState) => prevState + 1) //in this way the state value will always be the updated one
    }, 2000);
  }
  return <>
    <section style={{ margin: '4rem 0' }}>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value - 1)}>decrease</button>
      <button className='btn' onClick={() => setValue(value + 1)}>increase</button>
      <button className='btn' onClick={reset}>reset</button>
    </section>

    <section style={{ margin: '4rem 0' }}>
      <h2>complex counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={complexIncrease}>increase later</button>

    </section>
  </>;
};

export default UseStateCounter;
