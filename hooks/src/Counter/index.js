import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Counter</h1>
      <div>Count : {count}</div>
      <button onClick={() => setCount(count + 1)}>up</button>
    </div>
  )
}

export default Counter;