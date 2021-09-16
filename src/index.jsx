import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import { store } from "./redux/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="container">
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
