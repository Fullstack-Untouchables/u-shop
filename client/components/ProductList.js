import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchProducts, getProducts } from '../store/products.js';
import store from '../store'



export class ProductList extends Component {
 
  constructor(props){
    super(props)

  }

  componentDidMount() {
    const getProductsThunk = this.props.fetchProductsfromDb;
    console.log("getproducts thunk",this.props)
    getProductsThunk();

  }

  render(){
    // console.log('Product List props ', this.props)
    // console.log("fetch products",fetchProducts)
    console.log('Products', this.props.products)
    //console.log(products + " *************** ")
    const products = this.props.products
    console.log(products)
    return(<div>
        <h3>Products</h3>
        <hr />
        { 
          products.length && products.map(product=>{
            return(
              <p key={product.id}>{product.name} | {product.description} | ${product.price}</p>
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
    // fetchProductsfromDb(){
    //     const action = fetchProducts() //thunk
    //     dispatch(action)
    //     console.log("mapped dispatch")
        fetchProductsfromDb: () => {
        dispatch(fetchProducts())
        }
      }
  }
  



export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
