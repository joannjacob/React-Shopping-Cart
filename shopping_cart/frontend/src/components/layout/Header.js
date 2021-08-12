import React, { Component } from "react";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>YOUR CART</h1>
        <h3>
          "I say let the world go to hell, but I should always have my tea."
        </h3>
        <h4>———Fyodor Dostoyevsky, Notes from Underground</h4>
      </div>
    );
  }
}

export default Header;
