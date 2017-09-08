import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

class ProductComponent extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    onChangeTextfieldHandler: PropTypes.func.isRequired,
    onUploadImageHandler: PropTypes.func.isRequired
  }
  state = { file: '', imagePreviewUrl: '' }
  handleOnChangeTextfield = e => {
    const { onChangeTextfieldHandler } = this.props
    onChangeTextfieldHandler({ name: e.target.name, value: e.target.value })
  }
  handleImageChange = e => {
    const { onUploadImageHandler } = this.props
    console.log(`handleImageChange event: ${e}`)
    e.preventDefault()
    const reader = new FileReader()
    const file = e.target.files[0]
    onUploadImageHandler(file)
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }
    reader.readAsDataURL(file)
  }
  render() {
    const { product: { image, title, description, price } } = this.props
    const { imagePreviewUrl } = this.state
    return (
      <div className="row">
        <div className="col-md-4">
          <img className="mb3" src={imagePreviewUrl || image} alt="" />
          <input className="fileInput" type="file" onChange={e => this.handleImageChange(e)} />
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
