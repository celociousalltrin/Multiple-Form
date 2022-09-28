import React from 'react'

const SignUp = ({handleChange, formData}) => {

  return (
    <div>
        <input type="email" placeholder='email...' name = "mail" value={formData.mail} onChange={handleChange}/>
        <br />
        <input type="text" placeholder = "name.." name = "name" value={formData.name} onChange={handleChange}/>
        <br />
        <input type="password" placeholder='password...' name = "password" value={formData.password} onChange={handleChange}/> 
    </div>
  )
}

export default SignUp