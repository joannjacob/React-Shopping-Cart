import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./CartItems.css";
import PropTypes from "prop-types";
import { getProducts } from "../../actions/products";
import { getOrder } from "../../actions/cartItems";
import { connect } from "react-redux";
import Counter from "../counter/Counter";

class CartItems extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
    getOrder: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getProducts();
    this.props.getOrder();
  }

  render() {
    let quantity = 0;

    const Menu = list =>
      list.map(product => {
        let cartitemexists = cart.cartitems.some(
          item => item.id === product.id
        );

        if (cartitemexists) {
          quantity = cart.cartitems.find(item => item.id === product.id)
            .quantity;
        } else {
          quantity = 0;
        }
        return (
          <div className="card" key={product.id}>
            <div className="card-image">
              <img
                className="productimage"
                src={product.image}
                alt={product.name}
              />
              <div class="top-right">{quantity}</div>

              <span
                to="/"
                className="btn-floating halfway-fab waves-effect waves-light red"
                onClick={() => {
                  this.handleClick(product.id);
                }}
              ></span>
              <div className="counter">
                <Counter key={product.id} product={product} />
              </div>
            </div>
            <div className="card-content">
              <p>{product.name}</p>
              <p>
                <b>{product.cost}$</b>
              </p>
            </div>
          </div>
        );
      });

    const { cart } = this.props;
    console.log(" ORDER", cart);
    // Create menu from items
    const menu = Menu(cart.order);
    return (
      <div className="CartItem">
        <ScrollMenu data={menu} onSelect={this.onSelect} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  cart: state.cart
  // order: state.order.order
});

export default connect(mapStateToProps, { getProducts, getOrder })(CartItems);
