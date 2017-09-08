import React from 'react'
import PropTypes from 'prop-types'

const ProductComponent = ({ product }) => <img className="card-img-top" src={product.image} alt="" />
ProductComponent.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductComponent
