import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, getProducts, destroyProduct } from '../store/products.js';
import store from '../store'

export class ProductLine extends Component {
    constructor(props){
        super(props)
        this.state = {
            product: this.props.product
        }

        this.handleDelete = this.handleDelete.bind(this)
    }


    handleDelete(evt){
        this.props.destroyProduct(this.state.product)
    }

    render() {
        const product = this.props.product
        const isAdmin = this.props.isAdmin
        return(<div key={product.id}>
            <Link to={`/products/${product.id}`}>
            <p>
            <img className="imgResponsive" src={product.image}/>
            {product.name} | {product.description} | ${product.price}
            </p>
            </Link>
            <div>
          
              <p>Category: <Link to={`/categories/${product.category.id}`}>{product.category.name}</Link></p></div>
            
              {
                isAdmin? <div>
                <Link to ={`/products/edit/${product.id}`}><button className="btn btn-warning">EDIT PRODUCT</button></Link>
                 <button className="btn btn-danger" onClick={this.handleDelete}>DELETE PRODUCT</button>
                </div>
                :
                null
              } 
          
            <hr/>
            </div>)
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      
      destroyProduct: (productToDelete)=>{
          dispatch(destroyProduct(productToDelete))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductLine)