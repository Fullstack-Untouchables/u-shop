import React, {Component} from 'react';
import {connect} from 'react-redux';
<<<<<<< Updated upstream





export const ProductList = (props) => {

    return (
      <div>
       <div></div>
       <div></div>
       <div></div>

      </div>
    )
}



const mapState = (state) => {
=======
import { Link } from 'react-router-dom';
import { fetchProducts, getProducts } from '../store/products.js';
import store from '../store'


 const ProductList = (props) => {

    console.log('PRODUCT LIST PROPS', props);
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
const mapStateToProps = (state, ownProps) => {
  console.log('OWN PROPS', ownProps)
>>>>>>> Stashed changes
  return {
    // isLoggedIn: state.user.loggedin?
  }
}
<<<<<<< Updated upstream
=======

export default connect(mapStateToProps)(ProductList)
>>>>>>> Stashed changes


export default connect(mapState)(ProductList)