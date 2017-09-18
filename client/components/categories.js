import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import store, {getCategoriesThunk} from '../store';
import {Link} from 'react-router-dom';



class Categories extends Component {

  /* componentDidMount(){
    store.dispatch(getCategoriesThunk())
  } */

  render() {
  return (
      <div>
      {
        this.props.categories && this.props.categories.map(category => (
          <div key={category.id}>
            <p><Link to={`categories/${category.id}`}>{category.name}</Link></p>
          </div>
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
