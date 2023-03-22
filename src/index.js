import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./scss/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import axios from "axios";
import bootstrap from "bootstrap";

axios.defaults.baseURL = process.env.REACT_APP_API_HOST;

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
