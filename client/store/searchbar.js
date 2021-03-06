import axios from 'axios';
import history from '../history';


//ACTION TYPES
// const SEARCH_SUBMIT = 'SEARCH_SUBMIT'
const WRITE_SEARCH = 'WRITE_SEARCH'

//INITIAL STATE
const inputValue = ''

//ACTION CREATORS
// export const submitSearch = (search) => ({type: SEARCH_SUBMIT})
export const writeInputValue = (inputValue) => ({type: WRITE_SEARCH, inputValue})

//THUNK CREATORS


//REDUCER

export default function (state = inputValue, action) {
  switch (action.type) {
    case WRITE_SEARCH:
      return action.inputValue


    default:
      return state
  }
}
