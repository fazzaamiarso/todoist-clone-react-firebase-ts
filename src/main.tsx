import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./utils/firebase";
import AuthProvider from "./store/AuthProvider";
import CSSReset from "@chakra-ui/css-reset";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CSSReset />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
