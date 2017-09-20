import axios from 'axios';

//add a thunk for write new review?
const initialState = {
    products: [],
    slectedProduct: {}

}

//ACTIONS
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT ="EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const POST_REVIEW = 'POST_REVIEW';


export function getProducts(products) {
    return {
        type: GET_PRODUCTS,
        receivedProducts: products
    }
}

export function addProduct(newProduct){
    return {
        type: ADD_PRODUCT,
        newProduct
    }
}

export function editProduct(editedProduct){
    return {
        type: EDIT_PRODUCT,
        editedProduct
    }
}
export function deleteProduct(productToDeleteId){
    return {
        type: DELETE_PRODUCT,
        productToDeleteId
    }
}

export function postReview(newReview) {
    return {
        type: POST_REVIEW,
        newReview
    }
}

//THUNKS 



///BEING USED IN ROUTES TO FETCH ON INITAIL LOAD AND REFRESH
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

export function postProduct(newProduct, category){
    console.log("INSIDE POST PRODUCT!!!!")
    return function thunk(dispatch){
        axios.post('/api/products', newProduct)
        .then(res=>res.data)
        .then(addedProduct=>{
            /// CATEGORY IS NOT AUTOMATICALL ATTACED IT NORMALL DOES IT ON THE GET SO WE DID IT MANUALLY HERE 
            addedProduct.category = category
            console.log(addedProduct)
            const addProductAction=addProduct(addedProduct)
            dispatch(addProductAction)
        })
        .catch(console.error)
    }
}

export function putProduct(editedProduct, category){
    console.log("EDITED PRODUCT INSIDE PUT ",editedProduct)
    
    return function thunk(dispatch){
        axios.put(`/api/products/${editedProduct.id}`,editedProduct)
        .then(res=>res.data)
        .then(editedProduct=>{
            /// CATEGORY IS NOT AUTOMATICALL ATTACED IT NORMALL DOES IT ON THE GET SO WE DID IT MANUALLY HERE 
            editedProduct.category = category
            console.log("PRODUCT WITH CATEGORY",editedProduct)
            const editProductAction=editProduct(editedProduct)
            dispatch(editProductAction)
        })
        .catch(console.error)
    }
}

export function destroyProduct(productToDelete){
    console.log("INSIDE DESTROY PRODUCT")
    // let response =confirm("Are you sure you want to delete this product")
    // console.log("Product to delete", productToDelete.id)

    return function thunk(dispatch){
        console.log("INSIDE return function")
        axios.delete(`/api/products/${productToDelete.id}`)
        .then(res=>res.data)
        .then(()=>dispatch(deleteProduct(productToDelete.id)))
        .catch(console.error)
    }
}





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



export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return Object.assign({},state,{products: action.receivedProducts})
            //return { products: action.receivedProducts, slectedProduct: {}}

        case ADD_PRODUCT:
             return Object.assign({},state, {products:[...state.products, action.newProduct]})
        
        case EDIT_PRODUCT:
        //mapping throught the array to make a new array if the id matches, it returns the updated product to the array, else it 
        //replaces it 
            const updatedProducts = state.products.map(product=>{
                if(product.id===action.editedProduct.id){
                    return action.editedProduct;
                } else {
                    return product;
                }
            })
            return Object.assign({},state,{products:updatedProducts})
        
            case DELETE_PRODUCT:
                console.log("inside REDUCER")
                const newProductList = state.products.filter(product=>{
                    if(+product.id!==+action.productToDeleteId) return product
                })
                return Object.assign({},state,{products: newProductList})
           
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
