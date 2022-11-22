import { useState } from "react";

export const FormExample1 = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')
    
    
    let userInfo = {
        username: '',
        password: ''
    }
    const getUserName = (event) => {
        setUserName(event.target.value);
        userInfo.username = event.target.value;
        // console.log(event.target.value);
        // console.log('onchange');
        // validation logic
    }
    const getPassword = (event) => {
        setPassword(event.target.value)
        userInfo.password = event.target.value;
    }
    const print = (e) => {
        e.preventDefault();
        console.log('userInformation')
        console.log(userInfo);
    }

    return (
        <>  
            <h3>Login</h3>
            <form>
                <label htmlFor="">User Name: </label>
                <input type="text" name="username" id="username" onChange={getUserName} />
                <br /><br/>
                <label htmlFor="">Password: </label>
                <input type="text" name="password" id="password" onChange={getPassword} />
                <button onClick={print}>Submit</button>         
            </form>
            <h3>Details</h3>
            <div>Name: {userName}</div>
            <div>Password: {password}</div>
        </>
        
    )
}