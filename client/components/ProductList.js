import React, {Component} from 'react';
import {connect} from 'react-redux';





export const ProductList = (props) => {

    return (
      <div>
       <div></div>
       <div></div>
       <div></div>

      </div>
    )
}



const mapState = (state) => {
  return {
    // isLoggedIn: state.user.loggedin?
  }
}


export default connect(mapState)(ProductList)