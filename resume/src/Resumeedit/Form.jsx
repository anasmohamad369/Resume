import React, { useState } from 'react';
import './Form.css';

export const Form = ({ name, setName, lname, setLname, number, setNumber, email, setEmail, git, setGit, inputValue, setInputValue, location, setLocation }) => {
  const [isTabOpen, setIsTabOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: name,
      lastName: lname,
      number: number,
      email: email,
      gitUsername: git,
      githubLink: inputValue,
      location: location,
    };
    localStorage.setItem('userData', JSON.stringify(formData));
  };

  const handleOpenTab = () => {
    setIsTabOpen(true);
  };

  const handleCloseTab = () => {
    setIsTabOpen(false);
    setInputValue('');
  };

  const handleAdd = () => {
    handleCloseTab();
  };

  return (
    <>
      <div className="maincontainer">
        <form onSubmit={handleSubmit} className="form-container">
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

            <label>GitHub Username:</label>
            <input type="text" value={git} onChange={(e) => setGit(e.target.value)} />

            <div className="container">
              <button type="button" onClick={handleOpenTab}>Add GitHub Link</button>
              {isTabOpen && (
                <div className="tab">
                  <h3>Input Form</h3>
                  <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Paste GitHub link" />
                  <div className="button-group">
                    <button type="button" onClick={handleAdd} className="add-button">Add</button>
                    <button type="button" onClick={handleCloseTab} className="cancel-button">Cancel</button>
                  </div>
                </div>
              )}
            </div>
            <button type="submit" className="submit-button">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};
