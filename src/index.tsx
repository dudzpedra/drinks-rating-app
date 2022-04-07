import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index";
import AppRoutes from "./routes";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
