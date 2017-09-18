
//add a thunk for write new review?


const products = [
    {name: "jeans",
    description: "good jeans",
    quantity: 7,
    price: 9.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnXRrvtPMgZ3ZbIrjjXR8HuScBl3_X7h-P2ZTPUwsOdgA6vIT"
    },
]

const initialState={
    products: [],
    slectedProduct:{}
}

//ACTIONS 
export const GET_PRODUCTS ="GET_PRODUCTS";
export const POST_REVIEW ="POST_REVIEW"


export function getProducts(products){
    return {
        type: GET_PRODUCTS,
        receivedProducts: products
    }
}

export function postReviewAction(updatedProduct) {
    return {
        type: POST_REVIEW,
        updatedProduct
    }
}

//THUNKS ///ARE WE USING THIS THUNK EVER??????????
export function postReview(review, product){
    return function(){
        axios.post(`/api/reviews`, review)
        .then(res => res.data)
        .then(review => {
            const updatedProduct = product.reviews.push(review)
            dispatch()
        })
    }
}

export function fetchProducts(){

    return function thunk(dispatch){
        return this.products
    }
}

// export function fetchSingleProduct(productId){
//     return function thunk(dispatch){
//         axios.get(`/api/products/${productId}`)
//         .then
//     }
// }



export default function(state=initialState, action){
    switch (action.type){
    case GET_PRODUCTS:
       
        // return Object.assign({},state,{products: action.receivedProducts})
        return action.receivedProducts
    case POST_REVIEW:
        const productReviewed = state.products.filter(product=>{
         if(product.id === action.review.productId) return product })[0]
        productReviewed.reviews.push(action.review)    
        return Object.assign({}, state, {})     

        
    
    default:
        return state
    }
}
