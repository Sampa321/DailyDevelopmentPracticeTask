import React from 'react'

export default function Age({age}) {
     
  return (
    // <div className='flex justify-center h-80 items-center'>
    //     {age >= 18 ?(
    //         <span className='text-3xl font-semibold text-green-700 text-shadow-lg/30'>You are eligible for vote</span>):
    //         (<span className='text-3xl font-semibold text-purple-700 text-shadow-lg/30'>You are not eligible for vote</span>
    //     ) }
    // </div>



    <div className='flex justify-center h-80 items-center'>
        <span className={'text-3xl font-semibold  text-shadow-lg/30 '+(age >= 18 ?"text-green-700" :"text-purple-700")}>You are {age >= 18?"":"not"} eligible for vote</span>
    </div>
  )
}
