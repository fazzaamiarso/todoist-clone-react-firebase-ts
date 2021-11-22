import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./utils/firebase";
import CSSReset from "@chakra-ui/css-reset";
import { BrowserRouter } from "react-router-dom";
import TodoProvider from "./store/TodoProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoProvider>
        <CSSReset />
        <App />
      </TodoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
