import React, {useState} from 'react'

export default function RandomNumberGenerator() {
  const [value, setValue] = useState(null);
  return (
    <div className='flex flex-col items-center justify-center h-80 w-90 ml-140 mt-40 bg-indigo-400 border-1 rounded-2xl'>
      <div className='text-blue-1000 font-bold text-xl text-shadow-lg/25'>Random Number : {value}</div> <br />
      <button className='border border-1 font-semibold px-4 py-3 text-shadow-lg/30 bg-purple-600 cursor-pointer rounded-md text-white' onClick={()=>{setValue(Math.floor(Math.random()*10000))}}>Generate</button><br /><br />
    </div>
  )
}
