import { useState } from "react"

export default function ShowDetails(){
    let [xyz, updaterFunction] = useState("Hello")
    function updatedOutput(){
        updaterFunction("Updated output")
    }

    return(
        <div>
            <div>{xyz}</div>
            <button onClick = {updatedOutput} className="border-1 p-2 bg-gray-500 curson-pointer">Updated output</button>
        </div>
    )
}