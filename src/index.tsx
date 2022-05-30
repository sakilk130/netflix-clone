import "normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { GlobalStyles } from "./global-styles";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
reportWebVitals();
