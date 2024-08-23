import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render!!!
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value)
  }

  return <>
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <input type='form' ref={refContainer}></input>
        <button type='submit'>submit</button>
      </div>
    </form>
  </>;
};

export default UseRefBasics;
