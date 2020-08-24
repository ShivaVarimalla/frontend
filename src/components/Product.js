import React from 'react';
import Productsdata from '../data/Productsdata.js';

const Product = () => {
   {/*} const listarray = Productsdata.map((item, index)=> {
        return (<Product data ={item}/>) 
      }); */}
    return(
        <div>
        <Productsdata/>
        <h3>Products</h3>
          {/* <img className = "top" src={props.data.ProductImage}/>
           <div className = "bottom" >
           <li>{props.data.ProductName}</li>
           <li>{props.data.ProductBrand}</li>
           <li>{props.data.ProductDescription}</li>
           <li>{props.data.ProductPrice}</li>
           <li>{props.data.ProductAvailability}</li>
           <li>{props.data.ProductRating}</li>
           <li>{props.data.ProductSize}</li>
           <li>{props.data.ProductColor}</li>
           </div>  */}
        </div>  
    )
}
export default Product;