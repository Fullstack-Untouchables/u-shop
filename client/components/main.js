import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar} from './'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const {children, handleClick, isLoggedIn} = props

  return (
    <div>
<<<<<<< Updated upstream
=======
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav mr-auto'>
            {
              isLoggedIn
                ? <li className='nav-item active'>
                  {/* The navbar will show these links after you log in */}
                  <Link to='/home'>My Page</Link>
                  <a href='#' onClick={handleClick}>Logout</a>
                </li>
                : <li className='nav-item active'>
                  {/* The navbar will show these links before you log in */}
                  <Link to='/login'>Login</Link>
                  <Link to='/signup'>Sign Up</Link>
                </li>
            }
            <li className='nav-item active'>
            <Link to='/products'>
              <button type="button" className="btn btn-warning">Products</button>
            </Link>
            
          </li>
            <li className='nav-item active'>
              <Link to='/categories'>
                <button type="button" className="btn btn-primary">Categories</button>
              </Link>
            </li>
            <li className='nav-item active'>
              <Link to='/cart'>
                <button type="button" className="btn btn-success">Cart</button>
              </Link>
            </li>
            <li className='nav-item active'>
              <Searchbar />
            </li>
          </ul>
>>>>>>> Stashed changes

      <nav>
      <button type="button" className="btn btn-primary">Home</button>
      <button type="button" className="btn btn-info">Categories</button>
      <button type="button" className="btn btn-success">Cart</button>
        {
          isLoggedIn
            ? <div>
              {/* The navbar will show these links after you log in */}
              <Link to='/home'>Home</Link>
              <a href='#' onClick={handleClick}>Logout</a>
            </div>
            : <div>
              {/* The navbar will show these links before you log in */}
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Sign Up</Link>
            </div>
        }
      </nav>

      <hr />


      {children}
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
    handleClick () {
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
