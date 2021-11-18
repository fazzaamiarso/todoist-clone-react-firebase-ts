import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./utils/firebase";
import AuthProvider from "./store/AuthProvider";
import CSSReset from "@chakra-ui/css-reset";

ReactDOM.render(
  <React.StrictMode>
    <CSSReset />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
