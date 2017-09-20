import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, getProducts, destroyProduct } from '../store/products.js';
import store from '../store'
import ProductLine from './product-line';





 const ProductList = (props) => {

    console.log("PRODUCT LIST PROPS", props);
    console.log(destroyProduct)
    const products = props.products;
    const isAdmin = props.isAdmin
    //const destroy = props.destroyProduct();
    return (<div>
          {
            isAdmin? <h1>HELLO ADMIN</h1>:null
          }
        <h3>Products</h3>
        {isAdmin? <Link to={'products/add'}><button className="btn btn-success">ADD A PRODUCT</button></Link>:null}
          <hr />

          {
            products.length && products.map(product => {
              return (<div key={product.id}><ProductLine product={product} isAdmin={isAdmin}/></div>)
            })
          }
        </div>)

    }    

export default ProductList

