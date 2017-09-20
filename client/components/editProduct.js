import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import EditProductForm from './edit-product-form';
import {putProduct} from '../store/index'
import store from '../store'


class EditProduct extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            name: '',
            description: '',
            quantity: '',
            price: '',
            image: '',
            categoryId: ''
            //be caseful with product category check that you are comparing number 
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const productId = this.props.match.params.productId
        axios.get(`/api/products/${productId}`)
            .then(res => res.data)
            .then(product => {
                console.log("FULL PRODUCT", product)
                const name = product.name;
                const description = product.description;
                const quantity = product.quantity;
                const price = product.price;
                const image = product.image;
                const categoryId =product.category
                this.setState({name,description,quantity,price,image,categoryId})
            })
            .catch(console.error)
            
    }

    handleSubmit(evt){
        console.log("FORM SUBMITTED!!!@@#$%#")
        evt.preventDefault()
        const category = this.props.categories.filter(cat=>+cat.id===+this.state.categoryId)[0]

        const editedProduct = {
            id: +this.props.match.params.productId,
            name: this.state.name,
            description: this.state.description,
            quantity: +this.state.quantity,
            price: +this.state.price,
            image: this.state.image,
            categoryId: +this.state.categoryId

        }
        const action = putProduct(editedProduct, category)
        store.dispatch(action)
    }



    handleChange(evt){
        
        let n = evt.target.name
        this.setState({[n]: evt.target.value})
      }

    render(){
        // console.log("EDIT PRODUCT PROPS",this.props)
        // console.log("EDIT PRODUCT STAATE",this.state)
        
        // console.log(this.state)
        return(
            <div>
                <h1>WELCOME TO THE EDIT PRODUCT PAGE</h1>
                <EditProductForm handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                categories={this.props.categories}
                                product ={this.state}
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)