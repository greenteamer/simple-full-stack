import { combineReducers } from 'redux'
import { START_FETCHING, FINISH_FETCHING, REQUEST_PRODUCTS, RESEIVE_PRODUCTS } from '../actions'

const initialState = {
  isFetching: false,
  products: []
}

const productsApp = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return { ...state, isFetching: true }
    case FINISH_FETCHING:
      return { ...state, isFetching: false }
    case REQUEST_PRODUCTS:
      return { ...state, isFetching: true }
    case RESEIVE_PRODUCTS:
      return { ...state, isFetching: false, products: action.products }
    default:
      return state
  }
}

const rootReducer = combineReducers({ productsApp })

export default rootReducer
