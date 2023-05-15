import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "./index.css";

import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ToastContainer position="top-right" autoClose={3000} />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
