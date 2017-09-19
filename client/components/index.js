/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */

export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export Navbar from './navbar'
export Searchbar from './search-bar'
export ProductList from './products-list'
export Categories from './categories'
export LandingPage from './landing-page'
export SingleProduct from './single-product'
export Cart from './cart'
export SingleCategory from './single-category'
export SearchProducts from './search-products'
export Checkout from './checkout'



