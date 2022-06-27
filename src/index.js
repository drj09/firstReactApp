import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const name = "Drake";
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
