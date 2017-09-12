import axios from 'axios';
import history from '../history';


//ACTION TYPES
const SEARCH_SUBMIT = 'SEARCH_SUBMIT'
const WRITE_SEARCH = 'WRITE_SEARCH'

//INITIAL STATE
const initialState = {
  inputValue: ''
}

//ACTION CREATORS
const submitSearch = (search) => ({type: SEARCH_SUBMIT})
const writeInputValue = (inputValue) => ({type: WRITE_SEARCH, inputValue})

//THUNK CREATORS

//REDUCER

export default function (state = intialState, action) {
  switch (action.type) {
    case WRITE_SEARCH:
      return {
        ...state,
        inputValue: action.inputValue
      }
    case SEARCH_SUBMIT:

    default:
      return state
  }
}
