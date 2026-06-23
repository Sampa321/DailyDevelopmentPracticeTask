import React from 'react'

export default function Details(props) {
    // const person ={
    //     name : "Sampa Nayak",
    //     Age : 21,
    //     address : "Kolkata",
    // }



    const {name, age,city} = props;   // destructing in fly


  return (
    // <div className='p-3 border-1 w-60 bg-gray-300 rounded-xl m-3 outline outline-gray-600 outline-offset-2'>
    //   <h3 className='font-bold'>Name : {person.name}</h3>
    //   <h3>Age : {person.Age}</h3>
    //   <h3>Address : {person.address}</h3>
    // </div>

    // <div className='p-3 border-1 w-60 bg-gray-300 rounded-xl m-3 outline outline-gray-600 outline-offset-2'>
    //   <h3 className='font-bold'>Name : {props.name}</h3>
    //   <h3>Age : {props.age}</h3>
    //   <h3>City : {props.city}</h3>
    // </div>



    <div>
      <h3 className='font-bold'>Name : {name}</h3>
       <h3>Age : {age}</h3>
       <h3>City : {city}</h3>
    </div>
  )
}
