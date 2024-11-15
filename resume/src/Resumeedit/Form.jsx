import React from 'react';
import './Form.css';
import { useState } from 'react';
export const Form = ({ name, setName, lname, setLname,number,setNumber ,email,setEmail,git,setGit,linked,setLinked ,location,setLocation}) => {
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

  // function App() {
    const [isTabOpen, setIsTabOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    const handleOpenTab = () => {
      setIsTabOpen(true);
    };
  
    const handleCloseTab = () => {
      setIsTabOpen(false);
      setInputValue('');
    };
  
    const handleAdd = () => {
      // alert(`Submitted: ${inputValue}`);
      handleCloseTab();
    };
  return (
    <>

    {/* <h1 className='personal'> Personal Information</h1> */}
    <div className="maincontainer">

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
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Location:</label>
          <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <span className='span'> Click on save button </span>
        <button type="submit" className="submit-button">Save</button>
      </div>
    </form>
    <form onSubmit={handleSubmit} className="form-container"> 
    <div className="input-fields">


    <label>GitHub UserName:</label>
          <input
          type="text"
          name="git"
          value={git}
          onChange={(e) => setGit(e.target.value)}
        />
       
       <div className="container">
      <button onClick={handleOpenTab}>Link</button>

      {isTabOpen && (
        <div className="tab">
          <h3>Input Form</h3>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Paste Github link"
            className="inputtab"
          />
          <div className="button-group">
            <button onClick={handleAdd} className="add-button">Add</button>
            <button onClick={handleCloseTab} className="cancel-button">Cancel</button>
          </div>
        </div>
      )}
    </div>
        
      
        
         {/* <label>linked-in URl:</label>
          <input
          type="text"
          name="linked"
          value={linked}
          onChange={(e) => setLinked(e.target.value)}
        />
          <label>LOCATION:</label>
          <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        /> */}
    </div>

    </form>
    </div>

    </>

  );
};
