import axios from 'axios';

//add a thunk for write new review?
const initialState = {
    products: [],
    slectedProduct: {}

}

//ACTIONS
export const GET_PRODUCTS = "GET_PRODUCTS";
export const POST_REVIEW = "POST_REVIEW"


export function getProducts(products) {
    return {
        type: GET_PRODUCTS,
        receivedProducts: products
    }
}

export function postReview(updatedProduct) {
    return {
        type: POST_REVIEW,
        updatedProduct
    }
}

//THUNKS ///ARE WE USING THIS THUNK EVER??????????
export function postReviewThunk(review, product) {
    return function thunk(dispatch) {
        axios.post(`/api/reviews`, review)
            .then(res => res.data)
            .then(newReview => {
                const updatedProduct = product.reviews.push(newReview)
                dispatch(postReview(updatedProduct))
            })
    }
}

export function fetchProducts() {
    return function thunk(dispatch) {
        axios.get('/api/products')
            .then(res => {
                return res.data
            })
            .then(products => {
                const getProductsAction = getProducts(products)
                dispatch(getProductsAction)
            })
            .catch(console.error)
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return Object.assign({},state,{products: action.receivedProducts})
            //return { products: action.receivedProducts, slectedProduct: {}}

        case POST_REVIEW:
            const productReviewed = state.products.filter(product => {
                if (product.id === action.review.productId) return product
            })[0]
            productReviewed.reviews.push(action.review)
            return Object.assign({}, state, {})

        default:
            return state
    }
}
