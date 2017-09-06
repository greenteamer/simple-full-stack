import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchProducts } from '../actions'
import { ProductComponent } from '../components'
// import * as types from '../actionTypes'

class ProductsList extends React.Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchProducts())
  }
  render() {
    const { products, isFetching } = this.props
    if (isFetching) return <div>fetching</div>
    // return <div>Ok done</div>
    return (
      <div className="container">
        <h1 className="text-center">Hello Kaspersky</h1>
        <div className="row justify-center">
          {products && products.map((product, index) => <ProductComponent key={index} product={product} />)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { productsApp: { isFetching, products } } = state
  return { isFetching, products }
}
export default connect(mapStateToProps)(ProductsList)
