import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'
import { Searchbar } from './'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const { children, handleClick, isLoggedIn } = props

  return (
    <div>
      <nav className="">
        <Link to='/categories' className='nav-categories'>
          Categories
        </Link>
        <Searchbar/>
            {
              isLoggedIn
                ?
                <div>
                  {/* The navbar will show these links after you log in */}
                  <Link to='/home'>
                    My Page
                  </Link>
                  <a href='#' onClick={handleClick}>Logout</a>
                 </div>
                :
                <div>
                  {/* The navbar will show these links before you log in */}
                  <Link to='/login'>
                    Login
                  </Link>
                  <Link to='/signup'>
                    Sign Up
                  </Link>
                </div>
            }
        <Link to='/cart' className='cart'>
          Cart
        </Link>
        <Link to='/products' className='cart'>
                  Products
        </Link>
      </nav>

      <hr />

      <div className='main-page'>
      {children}
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
