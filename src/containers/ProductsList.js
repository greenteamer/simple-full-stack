import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchProductsIfNeeded } from '../actions'
import { ProductItem } from '../components'
// import * as types from '../actionTypes'

class ProductsList extends React.Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchProductsIfNeeded())
  }
  render() {
    const { products, isFetching } = this.props
    if (isFetching) return <div>fetching</div>
    return (
      <div className="container">
        <h1 className="text-center">Hello Kaspersky</h1>
        <div className="row justify-center">
          {products && products.map((product, index) => <ProductItem key={index} product={product} />)}
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
