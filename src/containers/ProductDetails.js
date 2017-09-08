import React from 'react'
import PropTypes from 'prop-types'
// import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchProductsIfNeeded, updateProduct } from '../actions'
import { ProductDescription, ProductForm } from '../components'
// import * as types from '../actionTypes'

class ProductDetails extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    currentProduct: PropTypes.object,
    products: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)

    const product = props.products.find(p => p.id === +props.match.params.productId)
    this.state = {
      isEditing: false,
      product: product ? product : {}
    }
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchProductsIfNeeded())
  }
  componentWillReceiveProps(nextProps) {
    const { products, match } = nextProps
    if (nextProps.products.length !== 0) {
      const product = products.find(p => p.id === +match.params.productId)
      this.setState({
        product
      })
    }
  }
  handleOnChangeTextfield = ({ name, value }) => {
    const newObj = Object.assign({}, this.state.product, {
      [name]: value
    })
    this.setState({ product: newObj })
  }
  handleToggleEditing = () => {
    this.setState({ isEditing: !this.state.isEditing })
  }
  handleUpdateProduct = () => {
    const { dispatch } = this.props
    dispatch(updateProduct(this.state.product))
  }
  render() {
    const { isFetching } = this.props
    const { isEditing, product } = this.state
    console.log('state product : ', product)
    if (isFetching || !product) return <div>Product detail fetching</div>
    return (
      <div className="container">
        {!isEditing && (
          <button type="button" className="btn btn-primary" onClick={this.handleToggleEditing}>
            редактировать
          </button>
        )}
        {isEditing && (
          <button type="button" className="btn btn-primary" onClick={this.handleUpdateProduct}>
            сохранить
          </button>
        )}
        {(!isEditing && <ProductDescription product={product} />) || (
          <ProductForm
            product={product}
            updateProductHandler={this.handleUpdateProduct}
            onChangeTextfieldHandler={this.handleOnChangeTextfield}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { productsApp: { isFetching, products, currentProduct } } = state
  return { isFetching, products, currentProduct }
}
export default connect(mapStateToProps)(ProductDetails)
