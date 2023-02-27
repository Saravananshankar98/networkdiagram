import { registerLicense } from "@syncfusion/ej2-base";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxIeUx0RWFab1t6dFNMZVpBNQtUQF1hSn5Rd0BjXHtac3RQQ2lY"
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
