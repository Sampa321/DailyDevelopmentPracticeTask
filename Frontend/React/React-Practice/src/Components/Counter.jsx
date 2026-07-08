import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div className='bg-blue-700 h-80 w-120 pt-15 ml-120 mt-40 rounded-2xl border-2 shadow shadow-blue-900'>
      <div className='text-3xl m-5 pl-30 font-bold text-white'>Count : {count}</div>
      <div>
        <button className='p-3 border bg-blue-300 m-2 cursor-pointer rounded-lg ml-10 font-semibold hover:bg-blue-400' onClick={()=>{
            setCount(count+1);
        }}>Increment</button>
        <button className='p-3 border bg-blue-300 m-2 cursor-pointer rounded-lg font-semibold hover:bg-blue-400' onClick={()=>{
            setCount(count-1);
        }}>Decrement</button>
        <button className='p-3 border bg-blue-300 m-2 cursor-pointer rounded-lg font-semibold hover:bg-blue-400' onClick={()=>{
            setCount(0);
        }}>Reset</button>
      </div>
    </div>
  )
}
