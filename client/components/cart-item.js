import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItemFromCart, removeAllItemsFromCart, getCartTotal } from '../store'

export class CartItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            quantity: this.props.item.quantity,
            itemPrice: this.props.item.price, 
            quantityPrice: this.props.item.price
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleClick() {
        this.props.removeItemFromCart(this.props.item.id)
    }

    handleChange(evt){
        let evtVal = evt.target.value;
        // if(+this.state.price * +evt.target.value !== 0) {
        //     priceUpdated = +this.state.price * +evt.target.value
        // }
        this.setState({ 
            quantity: evt.target.value,
            //price: priceUpdated || this.state.price
        })
        if(evt.target.value === '') {
            evtVal = 0
        }
        this.setState({
            quantityPrice: +this.state.itemPrice * +evtVal
        })
    }

    render() {
        console.log(this.state)
        const item = this.props.item
        return (<p>
            {console.log("ID", item.id)}
            <img className="imgResponsive" src={item.image} />
            {item.name} | { item.description } |
                <label htmlFor="quantity">Quantity</label>  
                <input 
                    type="text" 
                    id="quantity" 
                    value={this.state.quantity}
                    onChange={this.handleChange} /> 
            | ${this.state.quantityPrice}
            <button
                className='btn btn-danger' value={this.state.value}
                onClick={this.handleClick}>Remove From Cart
            </button>
            </p>)
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)