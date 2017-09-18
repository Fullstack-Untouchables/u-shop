import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItemFromCart, removeAllItemsFromCart } from '../store'

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
        return (
            <div >
                <h1>Welcome To your Cart!</h1>
                {
                    itemsInCart && itemsInCart.map(item => {
                        return (
                            <p key={item.id}>
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
                    <button
                        className='btn btn-danger'
                        onClick={this.removeAll}>Empty Cart
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemsInCart: state.cart.itemsInCart

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItemFromCart: (productId) => {
            dispatch(removeItemFromCart(productId))
        },
        removeAllItemsFromCart: () => {
            dispatch(removeAllItemsFromCart())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
