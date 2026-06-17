import React from "react";
import ReactDOM from "react-dom/client"


// let heading = React.createElement("h1",{id : "heading"}, "Hello from React")
// let input = React.createElement("input", {placeholder: "enter name.."})
// let main = React.createElement("div",{},[heading, input])
// let root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(main)



const main = <div>
    <h1>Hello from React</h1>
    <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70"></img>
</div>
let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(main)