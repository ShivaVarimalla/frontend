import React from 'react';
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header =()=> {
    return (
        <nav className= " header">
        <Link to="/">
        <img className= "headerlogo" src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>

        <div className = "headersearch">
        <input type= "text" className="headersearchInput"/>
        <SearchIcon className="headericon"/>
        </div>

        {/*1*/}
        <div className="headernav">
        <Link to="/Signin" className="headerlink">
        <div className = "headeroption">
        <span className="lineone">Hello User</span>
        <span className="linetwo">Sign In</span>
        </div>
        </Link>

        {/*2*/}
        <Link to="/" className="headerlink">
        <div className = "headeroption">
        <span className="lineone">Returns</span>
        <span className="linetwo">& Orders</span>
        </div>
        </Link>

        {/*3*/}
        <Link to="/" className="headerlink">
        <div className = "headeroption">
        <span className="lineone">Your</span>
        <span className="linetwo">Prime</span>
        </div>
        </Link>
        

        {/*4*/}
        <Link to="/checkout" className="headerlink">
        <div className = "headerbasket">
        <ShoppingBasketIcon/>
        <span className="basketlineone">0</span>
        </div>
        </Link> 
        </div> 
        </nav>
    )
}
export default Header;