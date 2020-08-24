import React from 'react';
import {Redirect} from 'react-router-dom'
const Signin =(props)=>{
    const {handleEnter, username} = props
    if( username !== '') {
        return <Redirect to='/' />;
    }
    return(
        <div>
        <h3>Signin</h3>
        <input placeholder = "username" type = "text" id = "username"/>
        <input placeholder = "password" type = "password" id = "password"/>
        <button onClick={handleEnter}>Enter</button>
        </div>
    )
}
export default Signin;