import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'

import { Main, Login, Signup, UserHome, ProductList, SingleProduct, Categories, LandingPage, Cart } from './components'
import {me} from './store'
import store, {getCategoriesThunk, fetchProducts, fetchItemsFromCart} from './store';


/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props


    return (
      <Router history={history}>
        <Main>

          <Switch>
            {/* Routes placed here are available to all visitors */}
             <Route  exact path='/products' component={ProductList} />
             <Route exact path='/products/:productId' component={SingleProduct} />
             <Route exact path='/products/search/:inputValue' component={ProductList} />
             <Route exact path='/categories' component={Categories} />
             <Route exact path='/login' component={Login} />
             <Route exact path='/signup' component={Signup} />

             <Route exact path='/cart' component={Cart} />

            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route path='/home' component={UserHome} />
                </Switch>
            }
            {/* Displays our Landing Page component as a fallback */}

            <Route component={ProductList} />



          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    itemsInCart: state.cart.itemsInCart
  }
}

const mapDispatch = (dispatch) => {

  return {
    loadInitialData () {
      dispatch(me())
      dispatch(getCategoriesThunk())
      dispatch(fetchProducts())
      dispatch(fetchItemsFromCart())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
