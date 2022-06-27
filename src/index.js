import React from "react";
import ReactDOM from "react-dom";

const name = "Drake";
ReactDOM.render(
  <div>
    <h1 className="heading">Hello {name}</h1>
    <ul>
      <li>Item1 </li>
      <li>Item2 </li>
    </ul>
  </div>,
  document.getElementById("root")
);
