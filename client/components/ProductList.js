import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, getProducts } from '../store/products.js';
import store from '../store'




 const ProductList = (props) => {
   
    console.log("PRODUCT LIST PROPS", props);
    const products = props.products;

    return (<div>
        <h3>Products</h3>
          <hr />

          {
            products.length && products.map(product => {
              return (
                <div key={product.id}>
                <Link to={`products/${product.id}`}>
                <p>
                <img className="imgResponsive" src={product.image}/>
                {product.name} | {product.description} | ${product.price}</p>
                </Link>
                </div>
              )
            })
          }
        </div>)

  }


// All Product data is fetched in route.js and passed into state
const mapStateToProps = (state,ownProps) => {
  
  console.log("OWN PROPS",ownProps)
  return {
    products: state.products
  }
}
  
export default connect(mapStateToProps)(ProductList)

