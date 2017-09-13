import axios from 'axios';

const initialState={
    reviews: []
}

export const GET_REVIEWS ="GET_REVIEWS";

export function getReviews(reviews){
    return {
        type: GET_REVIEWS,
        receivedReviews: reviews
    }
}

// export function fetchReviews(){
//     return function thunk(dispatch){
//         axios.get('/api/products')
//         .then(res=>{
//             return res.data
//         })
//         .then(products=>{
//             const getProductsAction= getProducts(products)
//             dispatch(getProductsAction)
//         })
//         .catch(console.error)
//     }
// }



export default function(state=initialState, action){
    switch (action.type){
    case GET_REVIEWS:
        // return Object.assign({},state,{products: action.receivedProducts})
        return action.receivedReviews
    default:
    
        return state
    }
}