import "normalize.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { FirebaseContext } from "./context/firebase";
import { GlobalStyles } from "./global-styles";
import reportWebVitals from "./reportWebVitals";
import { firebase } from "./lib/firebase.prod";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);
reportWebVitals();
