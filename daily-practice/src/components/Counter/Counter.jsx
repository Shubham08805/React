import { useState } from 'react';
export function Counter() {
   
    let [count, setCount] = useState(0);
    
    const CountOnClick = () => {
        setCount(count+1);
    console.log('clicked',count);
  }
    return (
        <div>
            <div>Count:{count}</div>
            <button onClick={CountOnClick}>Count</button>
        </div>
    )
}