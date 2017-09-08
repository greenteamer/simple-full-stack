import * as API from '../api'

export const START_FETCHING = 'START_FETCHING'
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const RESEIVE_PRODUCTS = 'RESEIVE_PRODUCTS'
export const REQUEST_PRODUCT = 'REQUEST_PRODUCT'
export const RESEIVE_PRODUCT = 'RESEIVE_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

export const startFetching = () => ({
  type: START_FETCHING
})

export const receiveProducts = data => ({
  type: RESEIVE_PRODUCTS,
  products: data
})

export const receiveProduct = data => ({
  type: RESEIVE_PRODUCT,
  product: data
})

export const updateProduct = product => ({
  type: UPDATE_PRODUCT,
  product
})

const shouldFetchProducts = () => (dispatch, getState) => {
  const state = getState().productsApp
  if (state.products.length === 0) return true
  if (state.isFetching) return false
  return false
}

// export const fetchProducts = () => async dispatch => {
//   if (dispatch(shouldFetchProducts())) {
//     dispatch(startFetching())
//     const response = await API.request(API.GET_PRODUCTS())
//     return dispatch(receiveProducts(response))
//   }
// }

export const fetchProductsIfNeeded = () => async dispatch => {
  if (dispatch(shouldFetchProducts())) {
    dispatch(startFetching())
    const response = await API.request(API.GET_PRODUCTS())
    return dispatch(receiveProducts(response))
  }
}

export const fetchProduct = id => async (dispatch, getState) => {
  const products = getState().productsApp.products
  console.log('state in fetchProduct: ', products)
  const product = products.find(p => p.id === id)
  if (!product) {
    dispatch(startFetching())
    const response = await API.request(API.GET_PRODUCT(id))
    return dispatch(receiveProduct(response))
  }
}
