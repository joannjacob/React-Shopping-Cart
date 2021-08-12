import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../../actions/products";
import "./Products.css";
import { addToCart, getCart, addProductToCart } from "../../actions/cartItems";

import HomeNavbar from "./HomeNavbar";

export class Products extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    addProductToCart: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    getCart: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getProducts();
    this.props.getCart();
  }

  handleClick = product => {
    this.props.addToCart(product);

    const order = {
      cart: this.props.cart[0].id,
      product: product.id,
      quantity: 1
    };
    this.props.addProductToCart(order);
  };

  render() {
    let itemList = this.props.products.map(product => {
      return (
        <div className="productcard" key={product.id}>
          <div className="productcard-image">
            <img src={product.image} alt={product.name} />
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <button
                class="addbutton"
                onClick={() => {
                  this.handleClick(product);
                }}
              >
                <i className="fa fa-plus-circle" style={{ fontSize: 30 }} />
              </button>
            </span>
          </div>

          <div className="productcard-content">
            <p>{product.name}</p>
            <p>
              <b>Price: {product.cost}$</b>
            </p>
          </div>
        </div>
      );
    });
    return (
      <Fragment>
        <HomeNavbar />
        <div className="container">
          <label className="productcenter">Our Products</label>
          <div className="box">{itemList}</div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  cart: state.cart.cartdetails,
  error: state.errors,
  message: state.messages
});

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    addToCart: product => dispatch(addToCart(product)),
    addProductToCart: product => dispatch(addProductToCart(product)),
    getCart: () => dispatch(getCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
