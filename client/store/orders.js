import axios from 'axios';


const initialState = {
    orders: [],
    total: 0,
    items: [],
    user: '',
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
        axios.post()
    }
}

export default function (state = initialState, action) {
    switch(action.type) {
        case PLACE_ORDER:

        default:
            return state
    }
}

