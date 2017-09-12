import React, {Component} from 'react';
import {connect} from 'react-redux';



const items = ["hat","glove", "scarf","boots"]

export default class Searchbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      products: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {

  }

  handleChange(event) {
    this.setState({inputValue: event.target.value})
  }

  render () {
    // const filteredItem = this.state.items.filter(item => item.name.match(this.state.inputValue))
    const filteredItem = items.filter(item => item.match(this.state.inputValue))

    return (
      <div>
        <form className='form-group' onSubmit={this.handleSubmit}>
          <input
            bsSize="small"
            className='form-control'
            placeholder='Look for an item'
            onChange={this.handleChange}
            // value={this.inputValue}
          />
        </form>
      </div>
    )
  }
}


