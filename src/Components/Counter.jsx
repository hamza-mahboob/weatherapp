import React, { useState } from 'react';
import '../Components/Counter'; // Import CSS for styling (you can create this file)

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ border: '2px solid #ccc', borderRadius: '5px', padding: '20px', width: '500px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Counter</h2>
      <div style={{ fontSize: '24px', marginBottom: '10px' }}>{count}</div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button style={{ margin: '2px', padding: '3px 6px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: 'gray', color: 'black', cursor: 'pointer' }} onClick={increment}>Increment</button>
        <button style={{ margin: '2px', padding: '3px 6px', fontSize: '16px', border: 'none', borderRadius: '5px', backgroundColor: 'gray', color: 'black', cursor: 'pointer' }} onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
