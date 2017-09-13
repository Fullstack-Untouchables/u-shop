import axios from 'axios';




const initialState={
    products: []
}

export const GET_PRODUCTS ="GET_PRODUCTS";


export function getProducts(products){
    console.log('%#%#%#', products)
    return {
        type: GET_PRODUCTS,
        receivedProducts: products
    }
}

export function fetchProducts(){
    return function thunk(dispatch){
        axios.get('/api/products')
        .then(res=>{
            return res.data
        })
        .then(products=>{
            const getProductsAction= getProducts(products)
            dispatch(getProductsAction)
        })
        .catch(console.error)
    }
}

export default function(state=initialState, action){
    switch (action.type){
    case GET_PRODUCTS:
        console.log("INSIDE REDUCER!!!!!!")
        // return Object.assign({},state,{products: action.receivedProducts})
        return action.receivedProducts
    default:
    console.log("RETURNING DEFAULT STATE")
        return state
    }
}
