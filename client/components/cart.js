import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItemFromCart, removeAllItemsFromCart, getCartTotal } from '../store'
import { Link } from 'react-router-dom';
import CartItem from './cart-item';

class Cart extends Component {
    constructor(props){
        super(props)
        this.removeAll = this.removeAll.bind(this)
    }

    removeAll(){
        this.props.removeAllItemsFromCart()
    }

    render() {
        console.log("CART PROPS", this.props)
        const itemsInCart = this.props.itemsInCart
        const totalPrice = this.props.total
        return (
            <div>
                <h1>Welcome To your Cart!</h1>
                {
                    itemsInCart && itemsInCart.map((item, i) => {
                        return (<div key={i}><CartItem item={item} /></div>)
                    })
                }
                <div>
                    <hr />
                    <p>Total: ${this.props.total}</p>
                    <hr />
                </div>
                <div>
                    <button
                        className='btn btn-danger'
                        onClick={this.removeAll}>Empty Cart
                    </button>
                    <Link to='/confirm'>
                       <button className='btn btn-success'>Checkout</button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemsInCart: state.cart.itemsInCart,
        total: state.cart.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // removeItemFromCart: (productId) => {
        //     dispatch(removeItemFromCart(productId))
        // },
        removeAllItemsFromCart: () => {
            dispatch(removeAllItemsFromCart())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
