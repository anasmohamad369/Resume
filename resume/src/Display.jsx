import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Side from './preview/Side';
import { Form } from './Resumeedit/Form';
import { Formone } from './Resumeedit/Formone';
import VerticalRectangle from './Leftblock';
import './Display.css';

export const Display = () => {
  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [git, setGit] = useState('');
  const [linked, setLinked] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData) {
      setName(savedData.firstName || '');
      setLname(savedData.lastName || '');
      setNumber(savedData.number || '');
      setEmail(savedData.email || '');
    }
  }, []);

  return (
    <div className="maindisplay">
      <div className="left">
        <VerticalRectangle />
        <Routes>
          <Route path="/" element={
            <Form
              name={name}
              setName={setName}
              lname={lname}
              setLname={setLname}
              number={number}
              setNumber={setNumber}
              email={email}
              setEmail={setEmail}
              git={git}
              setGit={setGit}
              linked={linked}
              setLinked={setLinked}
              location={location}
              setLocation={setLocation}
            />
          } />
          <Route path="/formone" element={
            <Formone/>
          } />
        </Routes>
      </div>
      <div className="right">
        <Side name={name} lname={lname} number={number} email={email} git={git} linked={linked} location={location} />
      </div>
    </div>
  );
};
