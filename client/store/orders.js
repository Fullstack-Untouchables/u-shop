import axios from 'axios';
import {removeAllItemsFromCart} from './index.js';

const initialState = {
    orders: [],
}

const PLACE_ORDER = 'PLACE_ORDER';

export function placeOrderAction(order){
    return {
       type: PLACE_ORDER,
       order 
    }
}

export function placeOrder(newOrder) {
    return function(dispatch) {
        axios.post('/api/orders', newOrder)
        .then(res => res.data)
        .then(newOrder=> {
            dispatch(placeOrderAction(newOrder))
            dispatch(removeAllItemsFromCart())
        })
        .catch(console.error)
    }
}

export default function (state = initialState, action) {
    switch(action.type) {
        case PLACE_ORDER:
            return Object.assign({}, state, {orders: [...state.orders, action.order]})
        default:
            return state
    }
}

