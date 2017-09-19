import React, { Component } from 'react';
import { connect } from 'react-redux';

class ConfirmOrder extends Component{
    render(){
        return(<div>
                <h3>Confim Order</h3>
               </div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        total: state.cart.total,
    }
}


export default connect(mapStateToProps)(ConfirmOrder)


