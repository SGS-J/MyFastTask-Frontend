import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";
import bootstrap from "bootstrap";

axios.defaults.baseURL = `http://${process.env.REACT_APP_API_HOST}`;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
