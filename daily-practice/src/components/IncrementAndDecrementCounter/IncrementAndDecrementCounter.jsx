import { useState } from 'react';
import './IncrementAndDecrementCounter.css'
function IncrementAndDecrementCounter() {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('');
    const [showCount, setNotShowCount] = useState(false);
    

    const increment = () => {
        if (count >= 0) {
            setMessage('');
            setNotShowCount(false);
        }
        setCount(count + 1);
        // console.log('increment clicked');
    }

    
    const decrement = () => {
        if (count <= 0) {
            setNotShowCount(true);
            setMessage('You cannot go below 0');
            return;
        }
        setCount(count - 1);
        // console.log('decrement clicked');
    }
    const hide = () => {
        return ;
        
    }
    
    return (
        <div className="App">
            <div id='showCount'>{showCount ? <hide />
                : <div id="count">Count:{count}</div>
            }</div>
            <div>{message}</div>
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
            
        </div>
    )
}
export default IncrementAndDecrementCounter;