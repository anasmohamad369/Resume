import React, { useState, useEffect } from 'react';
import Side from './preview/Side';
import { Form } from './Resumeedit/Form';

import './Display.css'
import VerticalRectangle from './Leftblock';

export const Display = () => {
  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [number,setNumber] = useState('');
  const [email,setEmail] = useState('');
  const[git,setGit] =useState('');
  const[linked,setLinked] =useState('');
  
  console.log(email);

  
  
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData) {
      setName(savedData.firstName || '');
      setLname(savedData.lastName || '');
      setNumber(savedData.number || '');
      setEmail(savedData.email || "");
    }
  }, []);

  return (
       <>
       <VerticalRectangle/>
       <div className="left">
       <Form name={name} setName={setName}  lname={lname} setLname={setLname} number={number} setNumber={setNumber}  email={email} setEmail={setEmail} git={git} setGit={setGit} linked={linked } setLinked={setLinked} />
       </div> 
    <div className="right">
    <Side name={name}  lname={lname} number={number} email={email} git={git} linked={linked}/>  

    </div>

       </>
  )
}
