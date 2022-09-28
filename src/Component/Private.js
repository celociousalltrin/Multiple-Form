import React from 'react'

const Private = ({handleChange, formData}) => {
  return (
    <div>
        <input type="text" placeholder = "City.." name = "city" value={formData.city} onChange={handleChange}/>
        <br />
        <input type="number" placeholder='Mobile Number...' name = "mobile" value={formData.mobile} onChange={handleChange}/> 
    </div>    
  
  )
}

export default Private;