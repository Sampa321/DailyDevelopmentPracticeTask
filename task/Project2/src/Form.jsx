import React from 'react'

export default function Form() {
  return (
    <div class= "FormDiv">
      <div class="first">
            <h2>A digital web studio creating <br /> stunning engaging online <br />experiences</h2>
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Atque, similique quos quidem, <br />doloribus nisi sapiente doloremque exercitationem <br /> illum iste enim quam repudiandae consequuntur placeat quasi est <br /> excepturi repellat quaerat possimus.</p>
            <button>Play Video</button>
      </div>
      <div>
        <form action="">
            <h3><b><center>Get 30 days FREE Trial</center></b></h3>
            <label htmlFor="FirstName">First Name</label><br />
            <input type="text" id='FirstName' placeholder='Enter First Name...'/><br /><br />
            <label htmlFor="LastName">Last Name</label><br />
            <input type="text" id='LastName' placeholder='Enter Last Name...'/><br /><br />
            <label htmlFor="email">Email</label><br />
            <input type="email" id='email' placeholder='Enter Email...'/><br /><br />
            <center><button>Free Trial</button></center>
        </form>
      </div>
    </div>
  )
}
