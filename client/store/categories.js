import axios from 'axios';
import history from '../history';


//ACTION TYPES
// const SEARCH_SUBMIT = 'SEARCH_SUBMIT'
const GET_CATEGORIES = 'GET_CATEGORIES';
const CREATE_CATEGORY = 'CREATE_CATEGORY';
const EDIT_CATEGORY = 'EDIT_CATEGORY';
const DELETE_CATEGORY = 'DETLETE_CATEGORY';


//INITIAL STATE
const initialCategories = []

//ACTION CREATORS

export const getCategories = (categories) => ({type: GET_CATEGORIES, categories})

export const createCategory = (category) => ({type: CREATE_CATEGORY, category})

export const editCategory = (category) => ({type: EDIT_CATEGORY, category})

export const deleteCategory = (category) => ({type: DELETE_CATEGORY, category})


//THUNK CREATORS
export function getCategoriesThunk() {
  return function thunk(dispatch) {
    return axios.get('/api/categories')
      .then(res => res.data)
      .then(categories => dispatch(getCategories(categories)))
  }
}

//REDUCER

export default function (state = initialCategories, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories
    case CREATE_CATEGORY:
      return []
    case EDIT_CATEGORY:
      return
    case DELETE_CATEGORY:
      return

    default:
      return state
  }
}
