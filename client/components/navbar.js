import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './Searchbar'




export const Navbar = (props) => {

    return (
      <div>
        <button type="button" className="btn btn-primary">Home</button>

        <button type="button" className="btn btn-info">Categories</button>
        <button type="button" className="btn btn-success">Cart</button>

      </div>
    )
}



const mapState = (state) => {
  return {
    // isLoggedIn: state.user.loggedin?
  }
}


export default connect(mapState)(Navbar)
