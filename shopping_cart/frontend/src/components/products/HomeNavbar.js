import React, { Component } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import { Button, Nav, Form, FormControl } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeNavbar.css";

export class HomeNavbar extends Component {
  render() {
    return (
      <div className="homeheader">
        <a href="/" class="logo">
          SHOPPING CART
        </a>
        <div className="homeheader-right">
          {/* <a href="/addproduct" style={{ fontSize: 24 }}>
            Add Product
          </a> */}
          <a href="/cart" style={{ fontSize: 30 }}>
            <i
              className="fa fa-shopping-cart"
              style={{ fontSize: 36, marginRight: 10 }}
            ></i>
            Cart
          </a>
        </div>
      </div>
    );
  }
}

export default HomeNavbar;
