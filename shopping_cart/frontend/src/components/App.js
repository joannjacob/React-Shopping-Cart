import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Cart from "./cart/Cart";
import Dashboard from "./products/Dashboard";
import Form from "./products/Form";

import Alerts from "./layout/Alerts";

import { Provider } from "react-redux";
import store from "../store";

//Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <BrowserRouter>
              <Switch>
                {/* <Alerts /> */}
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/addproduct" component={Form} />
              </Switch>
            </BrowserRouter>
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
