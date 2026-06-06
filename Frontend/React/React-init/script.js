import React from "react";
import ReactDOM from "react-dom/client"


let heading = React.createElement("h1",{id : "heading"}, "Hello from React")
let input = React.createElement("input", {placeholder: "enter name.."})
let main = React.createElement("div",{},[heading, input])
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(main)