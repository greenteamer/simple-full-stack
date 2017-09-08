import { combineReducers } from 'redux'
import { START_FETCHING, RESEIVE_PRODUCTS, RESEIVE_PRODUCT, UPDATE_PRODUCT } from '../actions'

const initialState = {
  isFetching: false,
  products: []
}

const productsApp = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return { ...state, isFetching: true }
    case RESEIVE_PRODUCTS:
      return { ...state, isFetching: false, products: action.products }
    case RESEIVE_PRODUCT:
      return { ...state, isFetching: false, products: [...state.products, action.product] }
    case UPDATE_PRODUCT:
      const newArr = [...state.products.filter(p => p.id !== action.product.id), action.product]
      return { ...state, isFetching: false, products: newArr }
    default:
      return state
  }
}

const rootReducer = combineReducers({ productsApp })

export default rootReducer
