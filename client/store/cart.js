import axios from 'axios'

const initialState = {
    itemsInCart: [],
    newItemEntry: {},
    itemToDeleteId: '',
    total: 0
}

export const GET_ITEMS_IN_CART = "GET_ITEMS_IN_CART";
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const DELETE_ITEM_FROM_CART = "DELETE_ITEM_FROM_CART";
export const DELETE_ALL_ITEMS_FROM_CART = "DELETE_ALL_ITEMS_FROM_CART";
export const GET_CART_TOTAL = "GET_CART_TOTAL";
export const UPDATE_QUANTITY_PRICE = "UPDATE_QUANTITY_PRICE";

export function updateQuantityPrice(cartItemId, quantityPrice, quantity){
    return {
        type: UPDATE_QUANTITY_PRICE,
        quantityPrice,
        cartItemId,
        quantity
    }
}

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

export function getCartTotal(){
    return {
        type: GET_CART_TOTAL,
    }
}

export function fetchItemsFromCart() {
    return function thunk(dispatch) {
        axios.get('/api/cartItems')
        .then(res => res.data)
        .then(cartItems => {
            console.log("items from cookie", cartItems)
            dispatch(getItemsInCart(cartItems))
            dispatch(getCartTotal())
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
            dispatch(getCartTotal())
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
            dispatch(getCartTotal())
        })
    }
}

export function removeAllItemsFromCart() {
    return function (dispatch) {
        axios.delete('/api/cartItems')
        .then(res => res.data)
        .then(() => {
            dispatch(deleteAllItemsFromCart())
            dispatch(getCartTotal())
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
        
        case GET_CART_TOTAL:
            const totalPrice = state.itemsInCart.reduce((sum, currentItem)=>{
                return sum + Number(currentItem.quantityPrice)
            }, 0) 
            return Object.assign({}, state, { total: totalPrice })
        case UPDATE_QUANTITY_PRICE:
            const updatedItemsInCart = state.itemsInCart.map(cartItem => {
                if(+cartItem.id === +action.cartItemId) {
                    return {...cartItem,
                            quantityPrice: action.quantityPrice,
                            quantity: +action.quantity }
                    // return Object.assign({}, cartItem, { 
                    //     quantityPrice: action.quantityPrice,
                    //     quantity: action.quantity
                    // })
                } else {
                    return cartItem
                }
            })
            return Object.assign({}, state, { itemsInCart: updatedItemsInCart })    

        default:
            return state
    }
}
