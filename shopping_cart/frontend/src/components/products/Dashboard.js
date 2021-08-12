import React, { Fragment } from "react";
// import Form from "./Form";
import Products from "./Products";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <Fragment>
      <div className="productcontainer">
        {/* <Form /> */}
        <Products />
      </div>
    </Fragment>
  );
}
