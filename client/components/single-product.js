import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/products.js';
import { placeItemInCart } from '../store';
import axios from 'axios'
import PostReviewForm from './post-review-form';
import { Link } from 'react-router-dom';

class SingleProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: {}
        }
        this.refreshReviews = this.refreshReviews.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }

    componentDidMount() {
        const productId = this.props.match.params.productId
        axios.get(`/api/products/${productId}`)
            .then(res => res.data)
            .then(product => this.setState({ product }))
    }

    refreshReviews(review) {
        const productId = this.props.match.params.productId
        axios.get(`/api/products/${productId}`)
            .then(res => res.data)
            .then(product => this.setState({ product }))
    }

    handleClick(evt) {
        const product = this.state.product
        console.log("clicked")
        const productToAdd = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        }
        console.log(productToAdd)
        this.props.placeItemInCart(productToAdd)
    }

    render() {
        // console.log("SINGLE PRODUCT STATE", this.state)
        console.log("SINGLE PRODUCT PROPS", this.props.itemsInCart)
        const product = this.state.product
        const reviews = product.reviews
        // console.log("add item to cart",addItemToCart)
        // console.log("PRODUCT",product)
        // console.log(reviews)
        let productInCart;
        this.props.itemsInCart.forEach((p)=>{ if(+p.id === +product.id){
            productInCart = true;
        }  })
        console.log("PRODUCT IN CART ", productInCart)
        //console.log("PROPPPPS",this.props)
        return (
            product ?
                <div>
                    <h3>Product Detail</h3>
                    <hr />
                    <h4>{product.name} | {product.description} | {product.price}</h4>
                    <img className="imgResponsive" src={product.image} />

                    { !productInCart?
                    <button className="btn btn-success btn-lg" onClick={this.handleClick}>
                        <span className="glyphicon glyphicon-shopping-cart"></span> Add To Cart
                    </button> 
                    : <h1>Already in Cart!</h1>
                    }

                    <h3>Reviews</h3>

                    <PostReviewForm
                        refreshReviews={this.refreshReviews}
                        productId={this.state.product.id} />

                    {
                        reviews && reviews.map(review => {
                            return (
                                <div key={review.id}>
                                    <h3>{review.user.name}</h3>
                                    <h4>{review.rating} stars</h4>
                                    <p>{review.text}</p>
                                </div>

                            )
                        })
                    }
                </div>
                : null
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products,
        itemsInCart: state.cart.itemsInCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductsfromDb: () => {
            dispatch(fetchProducts())
        },
        placeItemInCart: (productToAdd) => {
            dispatch(placeItemInCart(productToAdd))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)


