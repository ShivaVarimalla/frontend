import React from 'react';
//import Productsdata from '../data/Productsdata.js';


const Home = (props) => {
    {/*const {username} = props;
    const listarray = Productsdata.map((item, index)=> {
        return (<Home data ={item}/>) 
      }); */}

    return(
        <div>
        <div className= "home">
        <img className= "homeimage" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
        alt=""/>
        </div>
       <Productsdata/> 
        <h3>Home</h3>
        <p> Hello {username} </p>
        <img ClassName = "top" src = {props.data.ProductImage}/>
        <div Classname = "bottom">
        <li>{props.data.ProductName}</li>
        <li>{props.data.ProductBrand}</li>
         </div> 
        </div>  
    )
}
export default Home;