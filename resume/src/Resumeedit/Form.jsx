import React, { useState } from 'react';
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Form = ({
  name, setName, lname, setLname, number, setNumber,
  email, setEmail, git, setGit, inputValue, setInputValue,
  location, setLocation, setIsGitFocused , inputValueTwo,setInputValueTwo,setIsLinkedFocused
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: name,
      lastName: lname,
      number,
      email,
      gitUsername: git,
      githubLink: inputValue,
      location,
      linkedIn: inputValueTwo
    };
    localStorage.setItem('userData', JSON.stringify(formData));
  };

  return (
    <div className="maincontainer">
      <form onSubmit={handleSubmit} className="form-container">
      <h3> Personal Details</h3>

        <div className="input-fields">
          <label>First Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

          <label>Last Name:</label>
          <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} />

          <label>Phone Number:</label>
          <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />

          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />

            <h3> Social Media Links</h3>
        
          <div className="subform">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsGitFocused(true)}
            onBlur={() => setIsGitFocused(false)}
            placeholder="Enter GitHub link"
            className='col-md-6'  />
             <input
            type="text"
            value={inputValueTwo}
            onChange={(e) => setInputValueTwo(e.target.value)}
            onFocus={() => setIsLinkedFocused(true)}
            onBlur={() => setIsLinkedFocused(false)}
            placeholder="Enter Linked Url"
            className='col-md-6'  />

          </div>
          
          



          <button type="submit" className="submit-button">Save</button>
        </div>
      </form>
    </div>
  );
};
