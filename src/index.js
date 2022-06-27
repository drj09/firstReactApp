import React from "react";
import ReactDOM from "react-dom";

const name = "Drake";
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};
ReactDOM.render(
  <div>
    <h1 className="heading">Hello {name}</h1>
    <ul>
      <li style={customStyle}>Item1 </li>
      <li>Item2 </li>
    </ul>
  </div>,
  document.getElementById("root")
);
