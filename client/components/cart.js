import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from '../store';
import axios from 'axios'
import {Link} from 'react-router-dom';
import {removeItemFromCart} from '../store'



  class Cart extends Component{


handleClick(evt){
    console.log("target value",evt.target.value)
    console.log("clicked")

    const action = removeItemFromCart(evt.target.value)
    store.dispatch(action)
}

    render(){
        // const product = this.state.product
        // const reviews = product.reviews
        // console.log("PRODUCT",product)
        // console.log(reviews)
        console.log("CART PROPS",this.props)
        const itemsInCart=this.props.itemsInCart
        return (
           <div >
           <h1>Welcome To your Cart!</h1>
           {
           itemsInCart&&itemsInCart.map(item=>{
              return(
                  <p key={item.id}>
                  {console.log("ID",item.id)}
                  <img className="imgResponsive" src={item.image} />
                  {item.name} | {item.description} | ${item.price}
                  <button className='btn btn-danger' value={item.id} onClick={this.handleClick}>Remove From Cart</button>
                  </p>
                )
            })
           }
           </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemsInCart: state.cart.itemsInCart
        
    }
}

export default connect(mapStateToProps)(Cart)
