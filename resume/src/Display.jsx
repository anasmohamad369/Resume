import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Side from './preview/Side';
import { Form } from './Resumeedit/Form';
import VerticalRectangle from './Leftblock';
import './Display.css';

export const Display = () => {
  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  // const [git, setGit] = useState('');
  const [location, setLocation] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputValueTwo, setInputValueTwo] = useState('');
  
  const [isGitFocused, setIsGitFocused] = useState(false);
  const [isLinkedFocused,setIsLinkedFocused] = useState(false);
  
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData) {
      setName(savedData.firstName || '');
      setLname(savedData.lastName || '');
      setNumber(savedData.number || '');
      setEmail(savedData.email || '');
      // setGit(savedData.gitUsername || '');
      setLocation(savedData.location || '');
      setInputValue(savedData.githubLink || '');
      setInputValueTwo(savedData.linkedIn|| '');
    }
  }, []);

  return (
    <div className="maindisplay">
      <div className="left">
        <VerticalRectangle />
        <Routes>
          <Route
            path="/"
            element={
              <Form
                name={name}
                setName={setName}
                lname={lname}
                setLname={setLname}
                number={number}
                setNumber={setNumber}
                email={email}
                setEmail={setEmail}
                location={location}
                inputValue={inputValue}
                setInputValue={setInputValue}
                inputValueTwo={inputValueTwo}
                setInputValueTwo={setInputValueTwo}
                setLocation={setLocation}
                setIsGitFocused={setIsGitFocused}
                setIsLinkedFocused={setIsLinkedFocused}
              />
            }
          />
        </Routes>
      </div>
      <div className="right">
        <Side
          name={name}
          lname={lname}
          number={number}
          email={email}
          inputValue={inputValue}
          inputValueTwo={inputValueTwo}
          location={location}
          isGitFocused={isGitFocused}
          isLinkedFocused={isLinkedFocused}
        />
      </div>
    </div>
  );
};
