import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placeOrder, removeAllItemsFromCart } from '../store';

class ConfirmOrder extends Component{
    constructor(props){
        super(props)
        this.handleConfirm = this.handleConfirm.bind(this)
    }

    handleConfirm(){
        let cartItems = this.props.items
        cartItems.forEach(item=>{
            item.productId = item.id;
            //item.quantity = 1;
        })
        cartItems = cartItems.map(item => {
            return {
                price: item.price,
                quantity: item.quantity,
                productId: item.productId,
                quantity: item.quantity
                //userId: this.props.user.id
            }
        })
        const newOrder = { cartItems }
        this.props.postOrder(newOrder)
        //this.props.emptyCart()
    }

    render(){
        return(<div>
                <div>
                    <div>
                    <h3>Confim Order</h3>
                        <hr />
                        {
                            this.props.items.map((item,i) => {
                                return (<p key={i}>{item.name} | ${item.price}</p>)
                            })

                        }
                        <hr/>
                            <p>Total: ${this.props.total}</p>
                    </div>
                    <div>
                        <button onClick={this.handleConfirm} className='btn btn-success'>Confirm</button>
                        <button className='btn btn-danger'>Cancel</button>
                    </div>
                </div>
               </div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        total: state.cart.total,
        items: state.cart.itemsInCart,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        postOrder: (order) => {
            dispatch(placeOrder(order))
        },
        emptyCart: () => {
            dispatch(removeAllItemsFromCart())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ConfirmOrder)


