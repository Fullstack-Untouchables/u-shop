import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchProducts } from '../store/products.js';
import {addItemToCart, placeItemInCart} from '../store';
import store from '../store';
import axios from 'axios';
import {Link} from 'react-router-dom';


class SingleCategory extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log("SINGLE CATEGORY PROPS", this.props)
        const categoryId = +this.props.match.params.categoryId
        const categories=this.props.categories
        const products = this.props.products.products
        console.log(products.length&& categories.length)

        if(products.length&& categories.length){
            //categoryId is coming from match.params - router
        const selectedCategory= categories.filter(category=>category.id===categoryId)[0]
        const filteredProducts= products.filter(product=>+product.categoryId===categoryId) 
        console.log("FILTERED", filteredProducts)
        console.log("SELECTED CATEGORY", selectedCategory)
        console.log("SELECTED CATEGORY", selectedCategory.name)
        
        console.log("products", products)
        console.log("CATEGORY ID", categoryId)
        return(
        <div>
            <h1>hello</h1>
            <h1>{selectedCategory.name}</h1>
            <h2>Products</h2>
            {
                filteredProducts.map(product=>{
                    return(
                        <div key={product.id}>
                            
                                <p>
                                    <img className="imgResponsive" src={product.image}/>
                                    <Link to={`/products/${product.id}`}>
                                    {product.name} | {product.description} | ${product.price}
                                    </Link>
                                </p>
                            
                        </div>
                    )
                })
            }
        </div>
        )} else {
            return null;
        }
    }
}
const mapStateToProps=(state)=>{
    return{
        products: state.products,
        categories: state.categories
    }
}

export default connect(mapStateToProps)(SingleCategory)
