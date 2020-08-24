import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home.js';
import Product from './components/Product.js';
import Signin from './components/Signin.js';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleEnter =()=> {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    this.setState({ 
      username,
      password
    })
  }
  
  render(){
    let {username, password} = this.state;
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Navigation username = {username}/>
          <Route exact path = "/" render={(props)=> {
            return <Home {...props} username={username}/>
          }}/>
          <Route path = "/product" component={Product}/>
          <Route path = "/signin" render={(props)=> {
            return <Signin {...props} handleEnter={this.handleEnter} username = {username}/>
           } 
          }/> 
      </BrowserRouter>
    </div>
  );
}
}
export default App;
