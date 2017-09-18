import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchProducts } from '../store/products.js';
import store from '../store';
import axios from 'axios'
import PostReviewForm from './post-review-form';



 export default class SingleProduct extends Component{

    constructor(props){
        super(props)
        this.state={
            product: {}
        }
        this.refreshReviews=this.refreshReviews.bind(this)
    }

    componentDidMount(){
        const productId = this.props.match.params.productId
        axios.get(`/api/products/${productId}`)
        .then(res=>res.data)
        .then(product=>this.setState({product}))
    }

    refreshReviews(review){

        // const updatedProduct = Object.assign({},this.state, {
        //     this.state.product.reviews: [...this.state.product.reviews, review]
        // })

        // this.setState({
        //     product: this.state.product.reviews.push(review)
        // })

        // this.setState({
        //     product: updatedProduct,
        // })
        const productId = this.props.match.params.productId
        axios.get(`/api/products/${productId}`)
        .then(res=>res.data)
        .then(product=>this.setState({product}))
    }

    render(){

        const product = this.state.product
        const reviews = product.reviews
        console.log("PRODUCT",product)
        console.log(reviews)
        return(
            product ?
                <div>
                <h3>Product Detail</h3>
                <hr />
                <h4>{product.name} | {product.description} | {product.price}</h4>
                <img className= "imgResponsive" src={product.image} />
                <PostReviewForm
                    refreshReviews={this.refreshReviews}
                    productId={this.state.product.id}/>

                {
                    reviews && reviews.map(review=>{
                        return(
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

// const mapStateToProps = (state,ownProps) => {
//     return {
//       products: state.products
//     }
//   }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchProductsfromDb: ()=>{
//             dispatch(fetchProducts())
//         }
//     }
// }

//   export default connect(mapStateToProps,mapDispatchToProps)(SingleProduct)

