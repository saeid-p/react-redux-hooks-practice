import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const store = configureStore();
const rootElement = document.getElementById("app");
render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  rootElement
);
