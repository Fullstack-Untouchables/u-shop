import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { fetchProducts } from '../store/products.js';
import { placeItemInCart, destroyProduct } from '../store';
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
        const productToAdd = {
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            image: product.image,
            quantity: 1,
            quantityPrice: product.price,
        }
        // console.log(productToAdd)
        this.props.placeItemInCart(productToAdd)
    }

    render() {
        // console.log("SINGLE PRODUCT STATE", this.state)
        console.log("SINGLE PRODUCT PROPS", this.props.itemsInCart)
        const product = this.state.product
        const reviews = product.reviews

        let productInCart;
        this.props.itemsInCart.forEach((p)=>{ if(+p.id === +product.id){
            productInCart = true;
        }  })

        const isAdmin = this.props.isAdmin
        // console.log("add item to cart",addItemToCart)
        // console.log("PRODUCT",product)
        // console.log(reviews)
        console.log(destroyProduct)

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
              {
                isAdmin? <div>
                <Link to ={`/products/edit/${product.id}`}><button className="btn btn-warning">EDIT PRODUCT</button></Link>
                <button className="btn btn-danger" onClick={()=>(destroyProduct(this.state.product))}>DELETE PRODUCT</button>
                </div>
                :
                null
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
        itemsInCart: state.cart.itemsInCart,
        isAdmin: state.user.isAdmin
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
        destroyProduct: (productToDelete)=>{
            dispatch(destroyProduct(productToDelete))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)


