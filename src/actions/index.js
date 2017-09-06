import * as API from '../api'

export const START_FETCHING = 'START_FETCHING'
export const FINISH_FETCHING = 'FINISH_FETCHING'
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const RESEIVE_PRODUCTS = 'RESEIVE_PRODUCTS'

export const startFetching = () => ({
  type: START_FETCHING
})

export const finishFetching = () => ({
  type: FINISH_FETCHING
})

export const requestProducts = () => ({
  type: REQUEST_PRODUCTS
})

export const receiveProducts = json => ({
  type: RESEIVE_PRODUCTS,
  products: json
})

export const fetchProducts = () => async dispatch => {
  dispatch(requestProducts())
  const response = await API.request(API.GET_PRODUCTS())
  console.log('fetchProducts response: ', response)
  return dispatch(receiveProducts(response))
}
