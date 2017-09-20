import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import products from './products'
import searchbar from './searchbar'
import categories from './categories'
import { composeWithDevTools } from 'redux-devtools-extension';

import cart from './cart'

const reducer = combineReducers({user, products, searchbar, categories, cart})


const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './searchbar'
export * from './categories'
export * from './products'
export * from './cart'

