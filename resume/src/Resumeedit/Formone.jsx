import React from 'react'
import './Form.css';
export const Formone = () => {
  return (
    <>
       <form  className="form-container">
      <div className="input-fields">
        <label>First Name:</label>
        <input
          type="text"
          name="FirstName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> 
        </div>
        </form>
    </>
    
  )
}
