import React from 'react'

export const Formone = () => {
  return (
    <>
        <form>
        <label>First Name:</label>
        <input
          type="text"
          name="FirstName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> 
        </form>
    </>
    
  )
}
