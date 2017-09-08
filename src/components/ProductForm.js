import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

class ProductComponent extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    onChangeTextfieldHandler: PropTypes.func.isRequired
  }
  handleOnChangeTextfield = e => {
    const { onChangeTextfieldHandler } = this.props
    onChangeTextfieldHandler({ name: e.target.name, value: e.target.value })
  }
  render() {
    const { product: { image, title, description, price } } = this.props
    return (
      <div className="row">
        <div className="col-md-4">
          <img className="card-img-top" src={image} alt="" />
        </div>
        <div className="col-md-7">
          <div className="card">
            <div className="card-body">
              <form>
                <h1 className="card-title">
                  <input value={title} name="title" onChange={this.handleOnChangeTextfield} />
                </h1>
                <p className="f3">
                  <textarea
                    className="w-100"
                    rows={8}
                    value={description}
                    name="description"
                    onChange={this.handleOnChangeTextfield}
                  />{' '}
                  р.
                </p>
                <p className="">
                  <input value={price} name="price" onChange={this.handleOnChangeTextfield} /> р.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
ProductComponent.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductComponent
