/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
<<<<<<< Updated upstream
export {Navbar} from './navbar'
=======
export Navbar from './navbar'
export Searchbar from './searchbar'
export ProductList from './ProductList'
export Categories from './categories'
export LandingPage from './landingPage'
export SingleProduct from './SingleProduct'
export Cart from './cart'
>>>>>>> Stashed changes
