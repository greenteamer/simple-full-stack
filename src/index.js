import React from 'react'
import { render } from 'react-dom'

export default class App extends React.Component {
  render() {
    return <div>Hello</div>
  }
}

render(<App />, document.getElementById('root'))
