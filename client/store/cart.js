

const initialState={
    itemsInCart:[],
    newItemEntry: {},
    itemToDeleteId:''
}

// export const GET_ITEMS_IN_CART = "GET_ITEMS_IN_CART";
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const DELETE_ITEM_FROM_CART ="DELETE_ITEM_FROM_CART";

//action creators
export function addItemToCart(newItemEntry){
    console.log("inside add item to cart")
    return {
        type:ADD_ITEM_TO_CART,
        newItemEntry
        
    }
}
export function deleteItemFromCart(itemToDeleteId){
    return {
        type:DELETE_ITEM_FROM_CART,
        itemToDeleteId
    }
}

// export function getItemsInCart (items){
//     return {
//         type: GET_ITEMS_IN_CART,
//         items
//     }
// }
//actions 
// export function fetchItemsFromCart(){
//     return function thunk (dispatch){
//         const fetchItemsFromCart= getItemsInCart()
//         dispatch(fetchItemsFromCart)
//     }
// }
export function placeItemInCart(newItemEntry){
    console.log("INSIDE Place ITem in CART")
    return function thunk(dispatch){
        const addItemToCartAction = addItemToCart(newItemEntry)
        dispatch(addItemToCartAction)
    }
}

export function removeItemFromCart(itemToDeleteId){
    // console.log("INSIDE Remove Item from  CART")
    // console.log("ITEM TO DELETE FROM REMOVE ITEM", itemToDeleteID)
    // console.log("ITEM TO DELETE ID IS NAN?", isNaN(itemToDeleteID))
    return function (dispatch){
        const removeItemFromCartAction =deleteItemFromCart(itemToDeleteId)
        dispatch(removeItemFromCartAction)
    }
}


export default function(state=initialState, action){
    switch (action.type){
        // case GET_ITEMS_IN_CART:
        //     return Object.assign({},state,{itemsInCart: state.itemsInCart})
        case ADD_ITEM_TO_CART:
        console.log("INSIDE REDUCER")
            return Object.assign({},state,{itemsInCart: [...state.itemsInCart, action.newItemEntry]})
        case DELETE_ITEM_FROM_CART:
            // console.log("INSIDE DELETE!!!")
            // console.log("INSIDE REDUCER STATE ITEMS IN CART",state.itemsInCart)
            // console.log("INSIDE REDUCER ITEM TO DELETE ID",action.itemToDeleteId)
            state.itemsInCart= state.itemsInCart.filter(item=>item.id!==+action.itemToDeleteId)
            console.log(state.itemsInCart)
            return Object.assign({},state,{itemsInCart: state.itemsInCart})
        default:
        
            return state
    }
}