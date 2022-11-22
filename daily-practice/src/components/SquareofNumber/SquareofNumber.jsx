import { useRef, useState } from "react"

export function SquareofNumber() {
    
    const [number, setSquare] = useState();
    
    const onClickSquare = () => {
        
        setSquare(number*number);
        console.log('clicked',number);
    }
    return (
        <div>
            <div>Square of:{number}</div>
            <input type="number"  onChange={event=>setSquare(event.target.value)}/>
            <button onClick={onClickSquare}>Submit</button>
        </div>
    )
} 