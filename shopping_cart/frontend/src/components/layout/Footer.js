import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="upperfooter">Get Them!</div>
        <div className="lowerfooter">
          <a href="/">&larr; Return to Shop</a>
        </div>
      </div>
    );
  }
}

export default Footer;
