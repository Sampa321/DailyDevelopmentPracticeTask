import React, {useEffect, useState } from "react";
import TODO from "./TODO";

export default function ToDoDemo(){
    const[data, setData] = useState([]);
    useEffect(()=>{
        async function DataFetch() {
            const result = await fetch("https://dummyjson.com/todos");
            const output = await result.json()
            setData(output.todos)
            console.log(output.todos);
            
        }
        DataFetch();

    },[])
    return (
        <div className="ml-3 mr-3">
            {data.map((todo) => <TODO key={todo.id} todo = {todo}/>)}
        </div>
    )
}