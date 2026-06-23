import React from 'react'
import Details from './Components/Details'


export default function App() {
  const details =[
    {name : "Rudra", age : 21, city : "Kolkata"},
    {name : "Sampa", age : 20, city : "New york"},
    {name : "Rohit", age : 11, city : "Kolkata"},
    {name : "Rimpa", age : 21, city : "Kolkata"},
  ]

  // let userComponent = [];
  // for(let user of details)
  // {
  //   userComponent.push(<Details name = {user.name} age = {user.age} city = {user.city}/>)
  // }



   

  return (
    <div>
       {/* {
        userComponent
       } */}



       {/* {
        details.map((user) =>(
          <Details name = {user.name} age = {user.age} city = {user.city}/>
        ))
       } */}



       {
        details.map((user,index) =>(
          <Details key ={index} name = {user.name} age = {user.age} city = {user.city}/>
        ))
       }
    </div>
  )
}
 