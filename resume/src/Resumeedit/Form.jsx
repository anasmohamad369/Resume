import React from 'react';
import './Form.css';

export const Form = ({ name, setName, lname, setLname,number,setNumber ,email,setEmail ,git,setGit,linked ,setLinked }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: name,
      lastName: lname,
      number: number,
      email : email
    
     
    };
    localStorage.setItem('userData', JSON.stringify(formData));
  };

  return (
    <>

    <h1 className='personal'> Personal Information</h1>
    <form onSubmit={handleSubmit} className="form-container">
      <div className="input-fields">
        <label>First Name:</label>
        <input
          type="text"
          name="FirstName"
          value={name}
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
    <form onSubmit={handleSubmit} className="form-container"> 
    <div className="input-fields">


    <label>GitHub Url:</label>
          <input
          type="text"
          name="git"
          value={git}
          onChange={(e) => setGit(e.target.value)}
        />
         <label>linked URl:</label>
          <input
          type="text"
          name="linked"
          value={linked}
          onChange={(e) => setLinked(e.target.value)}
        />
    </div>

    </form>

    </>

  );
};
