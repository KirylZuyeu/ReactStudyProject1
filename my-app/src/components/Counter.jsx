import React, { useState } from 'react';

const Counter = () => {
    const [count, setSount] = useState(0);

    function increment() {
        setSount(count + 1);
      }
    
      function decrement() {
        setSount(count - 1);
      }

    return (
        <div>
            
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;