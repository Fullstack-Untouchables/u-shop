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
            name: '',
            description: '',
            quantity: '',
            price: '',
            image: '',
            categoryId: '2'
            //be caseful with product category check that you are comparing number 
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(evt){
        // console.log("FORM SUBMITTED!!!@@#$%#")
        evt.preventDefault()
        const category = this.props.categories.filter(cat=>+cat.id===+this.state.categoryId)[0]
        // console.log("CATEGORY FOR PRODUCT ", category)
        const newProduct = {
            name: this.state.name,
            description: this.state.description,
            quantity: +this.state.quantity,
            price: +this.state.price,
            image: this.state.image,
            categoryId: +this.state.categoryId
        }
        const action = postProduct(newProduct, category)
        store.dispatch(action)

    }

    handleChange(evt){
        
        let n = evt.target.name
        this.setState({[n]: evt.target.value})
      }

    render(){
        // console.log("AddProduct PROPS",this.props)
        console.log(this.state)
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
        categories: state.categories,
        // userIsAdmin: state.users
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