import React from 'react';
import './Form.css';

export const Form = ({ Fname, setName, lname, setLname,number,setNumber ,email,setEmail }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: Fname,
      lastName: lname,
      number: number,
      email : email
    
     
    };
    localStorage.setItem('userData', JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-fields">
        <label>First Name:</label>
        <input
          type="text"
          name="FirstName"
          value={Fname}
          onChange={(e) => setName(e.target.value)}
        /> 

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
         <label> Phone Number:</label>
         <input
          type="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
         <label>Mail:</label>
          <input
          type="mail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className='span'> Click on save button </span>
        <button type="submit" className="submit-button">Save</button>
      </div>
    </form>
  );
};
