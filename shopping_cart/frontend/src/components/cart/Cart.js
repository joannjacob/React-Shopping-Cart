import React, { Fragment } from "react";
// import Form from "./Form";
import CartItems from "./CartItems";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Amount from "../layout/Amount";

export default function Cart() {
  return (
    <Fragment>
      <Header />
      <CartItems />
      <Amount />
      <Footer />
    </Fragment>
  );
}
