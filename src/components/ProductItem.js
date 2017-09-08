import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductComponent = ({ product }) => (
  <div className="col-md-4 pv3 flex justify-center">
    <div className="card">
      <img className="card-img-top" src={product.image} alt="Card image cap" />
      <div className="card-body">
        <div className="flex flex-row justify-between items-center">
          <h4 className="card-title">{product.title}</h4>
          <p className="f3">{product.price} р.</p>
        </div>
        <Link className="btn btn-primary" to={`/products/${product.id} `}>
          Подробнее
        </Link>
      </div>
    </div>
  </div>
)
ProductComponent.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductComponent
