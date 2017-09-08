import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

const ProductComponent = ({ product }) => (
  <div className="row">
    <div className="col-md-4">
      <img className="card-img-top" src={product.image} alt="" />
    </div>
    <div className="col-md-7">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{product.title}</h1>
          <p className="f3">{product.price} р.</p>
          <p className="">{product.description}</p>
        </div>
      </div>
    </div>
  </div>
)
ProductComponent.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductComponent
