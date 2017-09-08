import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { ProductsList, ProductDetails } from './containers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const About = () => <div>Hello about</div>
const Topics = () => <div>Hello topics</div>

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
            </ul>
            <Route exact path="/" component={ProductsList} />
            <Route path="/products/:productId" component={ProductDetails} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
        </Router>
      </Provider>
    )
  }
}

render(<App />, document.getElementById('root'))
