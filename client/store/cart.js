import axios from 'axios'

const initialState = {
    itemsInCart: [],
    newItemEntry: {},
    itemToDeleteId: ''
}

export const GET_ITEMS_IN_CART = "GET_ITEMS_IN_CART";
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART";
export const DELETE_ALL_ITEMS_FROM_CART = "DELETE_ALL_ITEMS_FROM_CART";


//action creators
export function addItemToCart(newItemEntry) {
    return {
        type: ADD_ITEM_TO_CART,
        newItemEntry
    }
}
export function deleteItemFromCart(itemToDeleteId) {
    return {
        type: DELETE_ITEM_FROM_CART,
        itemToDeleteId
    }
}

export function deleteAllItemsFromCart() {
    return {
        type: DELETE_ALL_ITEMS_FROM_CART
    }
}

export function getItemsInCart(items) {
    return {
        type: GET_ITEMS_IN_CART,
        items
    }
}

export function fetchItemsFromCart() {
    return function thunk(dispatch) {
        axios.get('/api/cartItems')
        .then(res => res.data)
        .then(cartItems => {
            console.log("items from cookie", cartItems)
            dispatch(getItemsInCart(cartItems))
        })
    }
}

export function placeItemInCart(newItemEntry) {
    return function thunk(dispatch) {
        console.log('new product to add to cart ', newItemEntry)
        axios.post('/api/cartItems', newItemEntry)
        .then(res => res.data)
        .then(() => {
            dispatch(addItemToCart(newItemEntry))
        })
    }
}

export function removeItemFromCart(itemToDeleteId) {
    return function (dispatch) {
        console.log('item to delete id ', itemToDeleteId)
        axios.delete(`/api/cartItems/${itemToDeleteId}`)
        .then(res => res.data)
        .then(() => {
            dispatch(deleteItemFromCart(itemToDeleteId))
        })
    }
}

export function removeAllItemsFromCart() {
    return function (dispatch) {
        axios.delete('/api/cartItems')
        .then(res => res.data)
        .then(() => {
            dispatch(deleteAllItemsFromCart())
        })
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS_IN_CART:
            return Object.assign({}, state, {itemsInCart: action.items})

        case ADD_ITEM_TO_CART:
            return Object.assign({}, state, { itemsInCart: [...state.itemsInCart, action.newItemEntry] })

        case DELETE_ITEM_FROM_CART:
            state.itemsInCart = state.itemsInCart.filter(item => item.id !== +action.itemToDeleteId)
            console.log(state.itemsInCart)
            return Object.assign({}, state, { itemsInCart: state.itemsInCart })

        case DELETE_ALL_ITEMS_FROM_CART:
            return Object.assign({}, state, { itemsInCart: [] })

        default:
            return state
    }
}
