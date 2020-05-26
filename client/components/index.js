/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */

export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as Navbar} from './navbar';
export { default as Searchbar} from './search-bar'
export { default as ProductList} from './products-list'
export { default as Categories} from './categories'
export { default as LandingPage} from './landing-page'
export { default as SingleProduct} from './single-product'
export { default as Cart} from './cart'
export { default as SingleCategory} from './single-category'
export { default as AddProduct} from './addProduct'
export { default as EditProduct} from './editProduct'
export { default as SearchProducts} from './search-products'
export { default as ConfirmOrder} from './confirm-order'



