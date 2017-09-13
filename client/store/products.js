


const products = [
    {name: "jeans",
    description: "good jeans",
    quantity: 7,
    price: 9.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnXRrvtPMgZ3ZbIrjjXR8HuScBl3_X7h-P2ZTPUwsOdgA6vIT"
    },
]

const initialState={
    products: products
}

export const GET_PRODUCTS ="GET_PRODUCTS";


export function getProducts(products){
    return {
        type: GET_PRODUCTS,
        receivedProducts: products
    }
}

export function fetchProducts(){

    return function thunk(dispatch){
        return this.products
    }
}

function allProductsReducer(state=initialState, action){
    switch (action.type){
    case GET_PRODUCTS:
        return Object.assign({},state,{products: action.receivedProducts})
    
    default:
        return state
    }
}
