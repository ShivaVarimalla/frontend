import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = (props) => {
    const {username} = props; 
    return(
        <div>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/product"><li>Product</li></Link>
                <Link to="/signin"><li>{username? "Logout": "Signin"}</li></Link>
            </ul>
        </div>
    )
}
export default Navigation;