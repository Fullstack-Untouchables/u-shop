import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItemFromCart, removeAllItemsFromCart, getCartTotal } from '../store'
import { Link } from 'react-router-dom';

class Cart extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.removeAll = this.removeAll.bind(this)
    }

    handleClick(evt) {
        console.log("target value", evt.target.value)
        console.log("clicked")

        this.props.removeItemFromCart(evt.target.value)
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
                        return (
                            <p key={i}>
                                {console.log("ID", item.id)}
                                <img className="imgResponsive" src={item.image} />
                                {item.name} | {item.description} | ${item.price}
                                <button
                                    className='btn btn-danger' value={item.id}
                                    onClick={this.handleClick}>Remove From Cart
                                </button>
                            </p>
                        )
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
                       <button className='btn btn-danger'>Checkout</button>
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
        removeItemFromCart: (productId) => {
            dispatch(removeItemFromCart(productId))
        },
        removeAllItemsFromCart: () => {
            dispatch(removeAllItemsFromCart())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
