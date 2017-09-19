import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import AddProductForm from './add-product-form';
import {postProduct} from '../store/index'
import store from '../store'


class AddProduct extends Component{
    constructor(props){
        super(props)
        this.state = {
            productName: '',
            productDescription: '',
            quantityInStock: '',
            productPrice: '',
            productUrl: '',
            productCategory: +''
            //be caseful with product category check that you are comparing number 
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(evt){
        console.log("FORM SUBMITTED!!!@@#$%#")
        evt.preventDefault()
        
        const newProduct = {
            name: this.state.productName,
            description: this.state.productDescription,
            quantity: this.state.quantityInStock,
            price: this.state.productPrice,
            image: this.state.productUrl

        }
        const action = postProduct(newProduct)
        store.dispatch(action)
    }

    handleChange(evt){
 
        let n = evt.target.name
        this.setState({[n]: evt.target.value})
      }

    render(){
        console.log("AddProduct PROPS",this.props)
        // console.log(postProduct)
        return(
            <div>
                <h1>WELCOME TO THE ADD PRODUCT PAGE</h1>
                <AddProductForm handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                categories={this.props.categories}
                                />
                                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        categories: state.categories
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        postProduct: (newProduct)=>{
            dispatch(postProduct(newProduct))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)