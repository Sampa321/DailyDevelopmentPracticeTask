import React, { useState } from 'react'

export default function Fruit() {
  const [fruits, setFruits] = useState(["Apple", "Mango"]);
  const [name, setName] = useState("");

  function addFruit() {
    setFruits([...fruits, name]);
    setName("");
  }
  return (
    <div className='w-80 h-80 bg-purple-300 p-10 ml-150 mt-50 rounded-2xl border border-1 outline-1 outline-offset-2'>
      <h3 className='text-2xl font-semibold mb-4'>Fruits :</h3>
      <input onChange={(e)=>{
        setName(e.target.value)
      }} type="text" value={name} className='border w-60 h-10 mx-3 mb-3 px-1 font-bold cursor-pointer bg-amber-50 rounded-xl' placeholder='Enter fruits...' />
      <button onClick={addFruit} className='border border-1 font-bold px-2 py-1 rounded-lg ml-50 bg-pink-200 hover:bg-pink-500 cursor-pointer'>Add</button>
      <ul className='font-semibold'
      >{fruits.map((fruit, idx) => (<li key={idx}>{fruit}</li>))}</ul>
    </div>
  )
}
