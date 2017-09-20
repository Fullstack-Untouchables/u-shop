import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, getProducts } from '../store/products.js';
import store from '../store'




 const ProductList = (props) => {

    console.log("PRODUCT LIST PROPS", props);
    const products = props.products;

    return (
      <div className='product-list'>
        <br  />
        <header className='product-list-header'>
          <h2>New Products</h2>
        </header>


          <br />

          {
            products.length && products.map(product => {
              return (
                <div key={product.id} className='product-list-item'>
                  <Link to={`/products/${product.id}`}>
                    <div className='product-image'>
                      <img className="imgResponsive" src={product.image}/>
                    </div>
                  </Link>

                  <div className='product-info'>
                    <Link to={`/products/${product.id}`}>
                      <h3>{product.name}</h3>
                    </Link>
                    <h4>${product.price}</h4>
                    <p>Description: {product.description}</p>

                    <p>Category: <Link to={`/categories/${product.category.id}`}>{product.category.name}</Link></p>
                  </div>

                </div>
              )
            })
          }
        </div>)

  }


export default ProductList;

