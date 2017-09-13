import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchProducts } from '../store/products.js';
import store from '../store';



 class SingleProduct extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const getProductsThunk = this.props.fetchProductsfromDb;
        getProductsThunk();
    }

    render(){
        console.log(this.props.products)
        return(<div>
                <h3>Product Detail</h3>
                <hr />
            </div>)
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
      products: state.products
    }
  }
  const mapDispatchToProps = function(dispatch) {
    return {
          fetchProductsfromDb: () => {
          dispatch(fetchProducts())
          }
        }
    }
    
  export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)

