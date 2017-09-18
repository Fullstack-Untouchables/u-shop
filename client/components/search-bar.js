import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { writeInputValue } from '../store';

const Searchbar = (props) => {

  console.log(props.inputValue)
  return (
    <form className='Searchbar'>

      <input
        name='search'
        className='search-input'
        placeholder='Look for an item'
        onChange={props.handleChange}
        value={props.inputValue}
      />
      <Link to={`/products/search/${props.inputValue}`} className='search-btn'>
        Search
      </Link>

    </form>
  )
}


const mapState = (state) => {
  return {
    inputValue: state.searchbar
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleChange (event) {
      dispatch(writeInputValue(event.target.value))
    }
  }
}

// export default connect(mapState, mapDispatch)(Searchbar)
export default withRouter(connect(mapState, mapDispatch)(Searchbar))
