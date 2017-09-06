import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import ProductsList from './containers/ProductsListContainer'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ProductsList />
      </Provider>
    )
  }
}

render(<App />, document.getElementById('root'))
