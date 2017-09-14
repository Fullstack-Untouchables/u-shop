import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchProducts } from '../store/products.js';
import store from '../store';
import axios from 'axios'



 export default class SingleProduct extends Component{

    constructor(props){
        super(props)
        this.state={
            product: {}
        }
    }

    componentDidMount(){
        const productId = this.props.match.params.productId
        axios.get(`/api/products/${productId}`)
        .then(res=>res.data)
        .then(product=>this.setState({product}))
    }
    
    render(){
        const product = this.state.product
        console.log("PRODUCT",product)
        return(
            product?
                <div>
                <h3>Product Detail</h3>
                <hr />
                <h4>{product.name} | {product.description} | {product.price}</h4>
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

