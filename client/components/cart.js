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

    handleClick(evt) {
        this.props.removeItemFromCart(evt.target.value)
    }

    removeAll(){
        this.props.removeAllItemsFromCart()
    }

    render() {
        const itemsInCart = this.props.itemsInCart
        const totalPrice = this.props.total
        return (
            <div className='cart-list'>
                <br />
                <header className='cart-list-header'>
                <h2>Shopping Cart</h2>
                </header>
                <br/>
                {
                    itemsInCart && itemsInCart.map((item, i) => {
                        return (<div key={i}><CartItem item={item}/></div>)
                    })
                }
                <div className='cart-total'>
                <div>
                    <hr />

                    <h4>Total: ${this.props.total}</h4>

                    <hr />
                </div>
                <div className='cart-total'>
                    <button
                        className='btn-remove'
                        onClick={this.removeAll}>Empty Cart
                    </button>

                    <Link to='/confirm'>
                       <button className='btn btn-checkout'>Checkout</button>
                    </Link>
                </div>

                </div>
                <br />
                <hr />
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
