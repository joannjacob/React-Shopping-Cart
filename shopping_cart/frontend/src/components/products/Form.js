import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProduct } from "../../actions/products";
import "./Form.css";

export class Form extends Component {
  state = {
    serial_number: "",
    name: "",
    description: "",
    cost: "",
    image: ""
  };

  static propTypes = {
    addProduct: PropTypes.func.isRequired
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    const { serial_number, name, description, cost, image } = this.state;
    const product = { serial_number, name, description, cost, image };
    console.log(serial_number, name, description, cost);
    this.props.addProduct(product);
    this.setState({
      serial_number: "",
      name: "",
      description: "",
      cost: "",
      image: ""
    });
  };
  render() {
    const { serial_number, name, description, cost, image } = this.state;
    return (
      <div className="addproduct">
        {/* <div className="card card-body mt-4 mb-4"> */}
        <h2>Add Product</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Serial Number</label>
            <input
              className="form-control"
              type="text"
              name="serial_number"
              onChange={this.onChange}
              value={serial_number}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className="form-group">
            <label>Cost</label>
            <input
              className="form-control"
              type="text"
              name="cost"
              onChange={this.onChange}
              value={cost}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="file"
              name="product_image"
              onChange={this.onChange}
              value={image}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        {/* </div> */}
      </div>
    );
  }
}

export default connect(null, { addProduct })(Form);
