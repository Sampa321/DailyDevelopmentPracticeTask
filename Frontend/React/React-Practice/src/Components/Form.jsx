import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");
    let x = 20;
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
       <input className='border border-1 h-10 w-80 p-1 pl-3 m-1 rounded-xl font-bold text-shadow-lg/20 text-white text-xl bg-purple-600' name='name' value={name} type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
       <input className='border border-1 h-10 w-80 p-1 pl-3 m-1 rounded-xl font-bold text-shadow-lg/20  text-shadow-lg/20 text-white text-xl bg-purple-600' name='email' value={email} type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
       <input className='border border-1 h-10 w-80 p-1 pl-3 m-1 rounded-xl font-bold text-shadow-lg/20  text-shadow-lg/20 text-white text-xl bg-purple-600' name='password' value={password} type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
       <input className='border border-1 h-10 w-80 p-1 m-1 pl-3 rounded-xl font-bold text-shadow-lg/20 text-shadow-lg/20 text-white text-xl bg-purple-600' name='city' value={city} type="text" placeholder='City' onChange={(e)=>{setCity(e.target.value)}}/>



       <div className='border border-1 mt-10 mx-20 w-96 p-4 text-shadow-lg/20 text-white text-xl bg-purple-600 rounded-xl'>
        <ul>
            <li>Name : {name}</li>
            <li>Email : {email}</li>
            <li>Password : {password}</li>
            <li>City : {city}</li>
        </ul>
       </div>
    </div>
  )
}
