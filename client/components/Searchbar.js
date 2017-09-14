import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

import { submitSearch, writeInputValue } from '../store';

const Searchbar = (props) => {

  console.log(props.inputValue)
  return (
    <div>
      <form className='form-group'>
        <input
          name='search'
          className='form-control'
          placeholder='Look for an item'
          onChange={props.handleChange}
          value={props.inputValue}
        />
        <Link to={`/products/search/${props.inputValue}`} className='btn btn-link'>
          Click me
        </Link>
      </form>
    </div>
  )
}


const mapState = (state) => {
  return {
    inputValue: state.searchbar
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleChange (event) {
      dispatch(writeInputValue(event.target.value))
    }
  }
}

// export default connect(mapState, mapDispatch)(Searchbar)
export default withRouter(connect(mapState, mapDispatch)(Searchbar))
