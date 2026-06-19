 import React from 'react'
 import Login from './Components/Login'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import Footer from './Components/Footer'

 export default function App() {
   return (
     <div>
      {/* navbar */}
      <Navbar/>

      {/* Login */}
       <Login/>

       {/* Search */}
       <SearchBar/>

       {/* Footer */}
       <Footer/>
     </div>
   )
 }
 