import React, { Component } from 'react';
import { connect } from 'react-redux';

class ConfirmOrder extends Component{
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
                        <button className='btn btn-success'>Confirm</button>
                        <button className='btn btn-danger'>Cancel</button>
                    </div>
                </div>
               </div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        total: state.cart.total,
        items: state.cart.itemsInCart
    }
}


export default connect(mapStateToProps)(ConfirmOrder)


