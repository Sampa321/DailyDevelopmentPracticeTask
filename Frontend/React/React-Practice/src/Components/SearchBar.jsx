import React, { useState } from 'react'
import { use } from 'react';

export default function SearchBar() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    function addSub(){
        let temp = [...todos];
        let id = Math.floor(Math.floor(Math.random()*1000000))
        temp.push({id : id, name : input, completed : false})
        setTodos(temp);
        setInput("")
    }
  return ( 
    <div className='mt-3'>
        <h1 className='ml-25 font-bold ml-170'>To Do App</h1><br/>
       <div className='ml-150'>
         <input onChange={(e) => setInput(e.target.value)} value={input} className = 'border-1 h-10 bg-white  w-50 rounded-2xl pl-3 font-bold' type="text" placeholder='Search something...'/> 
         <button className='bg-blue-900 text-white border-1 outline-1 outline-black shadow-blue-900 h-10 w-15 rounded-xl ml-2 cursor-pointer' onClick={addSub}>Add</button>
       </div>
        <div className='ml-135'>
            {
                todos.map((todo)=> <div key={todo.id} className='border-1 w-100 p-3 mt-3 rounded-2xl flex justify-between items-center'>
                <input type="checkbox" name="" id=""  checked={todo.completed}/>
                <span className='font-bold'>{todo.name}</span>
                <b>Status : {todo.completed ? "Completed" : "Not completed"}</b> 
                <button className='border-1 p-1 rounded-xl text-white bg-purple-700'>Delete</button>
                </div>)
            }
            
        </div>
    </div> 
  )
}
