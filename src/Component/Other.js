import React from 'react'

const Other = ({handleChange, formData}) => {
  return (
    <div>
    <input type="text" placeholder = "Favourites.." name = "favourites" value={formData.favourites} onChange={handleChange}/>
    <br />
    <input type="text" placeholder='Anything...' name = "anything" value={formData.anything} onChange={handleChange}/> 
</div>    
  )
}

export default Other;