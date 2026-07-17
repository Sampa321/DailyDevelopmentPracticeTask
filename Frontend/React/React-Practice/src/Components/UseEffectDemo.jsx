import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {
    // console.log("Hello");
    // useEffect(()=>{
    //     console.log("Inside useEffect");
        
    // },[])
    // console.log("End");


    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [input2, setInput2] = useState("");
    
    useEffect(()=>{
        async function DataFetch() {
            const result = await fetch("https://dummyjson.com/posts")
            const output = await result.json()
            setData(output)
        }
        DataFetch()
        console.log("UseEffect run");
        
    },[input2])
    
  return (
    <div>
      UseEffectDemo
      <br/>
      <input className='border-1' type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/> <br />
      <input className='border-1' type="text" value={input2} onChange={(e)=>{setInput2(e.target.value)}}/>

    </div>
  )
}
