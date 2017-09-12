import React, {Component} from 'react';
import {connect} from 'react-redux';



// const items = ["hat","glove", "scarf","boots"]

export const Searchbar = (props) => {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     inputValue: '',
  //     products: []
  //   }
  //   this.handleSubmit = this.handleSubmit.bind(this)
  //   this.handleChange = this.handleChange.bind(this)
  // }


  // render () {
    // const filteredItem = this.state.items.filter(item => item.name.match(this.state.inputValue))
    const filteredItem = items.filter(item => item.match(this.state.inputValue))

    return (
      <div>
        <form className='form-group' onSubmit={props.handleSubmit}>
          <input
            name='search'
            className='form-control'
            placeholder='Look for an item'
            onChange={props.handleChange}
            value={props.inputValue}
          />
        </form>
      </div>
    )
  }
// }


mapState = (state) => {
  return {
    inputValue: state.inputValue
  }
}

mapDispatch = (dispatch, ownProps) => {
  return {
    handleChange (event) {
      dispatch(writeInputValue(event.target.value))
    },
    handleSubmit (input, event) {
      event.preventDefault();
      dispatch(submitSearch({input}, ownProps.history));
      dispatch(submitSearch(''))
    }
  }
}

export default connect(mapState, mapDispatch)(Searchbar)
