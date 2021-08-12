import React, { Component } from "react";
import { getCart, getOrder } from "../../actions/cartItems";
import "./Amount.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Amount extends Component {
  static propTypes = {
    cart: PropTypes.array.isRequired,
    getCart: PropTypes.func.isRequired,
    getOrder: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getCart();
    this.props.getOrder();
  }
  render() {
    const { cart } = this.props;
    // console.log("first", cart);
    let tax = 0,
      shipping_charge = 0;
    if (cart.cartdetails.length > 0) {
      tax = cart.cartdetails[0].tax;
      shipping_charge = cart.cartdetails[0].shipping_charge;
    }
    return (
      <div className="amount">
        <div className="subamount">
          <div className="subcalc">
            <div className="label">Subtotal:</div>
            <div className="value">{cart.subtotal}$</div>
          </div>
          <div className="subcalc">
            <div className="label">Sales tax:</div>
            <div className="value">{tax}%</div>
          </div>
          <div className="subcalc">
            <div className="label">Shipping:</div>
            <div className="value">{shipping_charge}$</div>
          </div>
          <div
            className="subcalc"
            style={{ fontWeight: "bold", fontSize: "25+px" }}
          >
            <div className="label">Total:</div>
            <div className="value">{cart.total}$</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, { getCart, getOrder })(Amount);
