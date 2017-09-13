import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, getProducts } from '../store/products.js';
import store from '../store'



 class ProductList extends Component {
 
  constructor(props){
    super(props)

  }

  componentDidMount() {
    const getProductsThunk = this.props.fetchProductsfromDb;
    
    getProductsThunk();

  }

  render(){
    const products = this.props.products
    return(<div>
        <h3>Products</h3>
        <hr />
        { 
          products.length && products.map(product=>{
            return(
              <div key={product.id}>
              <Link to={`products/${product.id}`}>
              <p>{product.name} | {product.description} | ${product.price}</p>
              </Link>
              </div>
            )
          })
        }
      </div>)

  }
}


const mapStateToProps = (state,ownProps) => {
  console.log("OWN PROPS",ownProps)
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
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
