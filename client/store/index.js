import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
<<<<<<< Updated upstream
import Searchbar from './searchbar'

const reducer = combineReducers({user})
=======
import products from './products'
import searchbar from './searchbar'
import categories from './categories'
import cart from './cart'

const reducer = combineReducers({user, products, searchbar, categories, cart})
>>>>>>> Stashed changes
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './searchbar'
<<<<<<< Updated upstream
=======
export * from './categories'
export * from './products'
export * from './cart'
>>>>>>> Stashed changes
