import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  
  return (
    <div>
      <h1>Counter</h1>
      <div>Count : {count}</div>
      <button onClick={() => setCount(count + 1)}>up</button>
    </div>
  )
}

export default Counter;