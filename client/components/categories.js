import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import store, {getCategoriesThunk} from '../store';



class Categories extends Component {

  /* componentDidMount(){
    store.dispatch(getCategoriesThunk())
  } */

  render() {
  return (
      <div>
      {
        this.props.categories && this.props.categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))
      }
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    categories: state.categories
  }
}


export default withRouter(connect(mapState)(Categories))
