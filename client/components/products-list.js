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
                <Link to={`/products/${product.id}`}>
                <p>
                <img className="imgResponsive" src={product.image}/>
                {product.name} | {product.description} | ${product.price}</p>
                </Link>
                  <p>Category: <Link to={`/categories/${product.category.id}`}>{product.category.name}</Link></p>
                <hr/>
                </div>
              )
            })
          }
        </div>)

  }


export default ProductList;

