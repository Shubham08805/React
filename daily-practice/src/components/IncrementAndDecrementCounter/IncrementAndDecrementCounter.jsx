import { useState } from 'react';
import './IncrementAndDecrementCounter.css'
function IncrementAndDecrementCounter() {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('');
    const [show, setNotShow] = useState(false);

    const increment = () => {
        if (count >= 0) {
            setMessage('');
            setNotShow(false);
        }
        setCount(count + 1);
        // console.log('increment clicked');
    }
    const decrement = () => {
        if (count <= 0) {
            setNotShow(true);
            setMessage('You cannot go below 0');
            return;
        }
        setCount(count - 1);
        // console.log('decrement clicked');
    }
    const hide = () => {
        <div></div>
    }
    return (
        <div className="App">
            {show ? <hide/>:<div id="count">Count:{count}</div>}
            <div>{message}</div>
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
        </div>
    )
}
export default IncrementAndDecrementCounter;