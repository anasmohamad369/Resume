import React, { useState, useEffect } from 'react';
import Side from './preview/Side';
import { Form } from './Resumeedit/Form';

import './Display.css'
export const Display = () => {
  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [number,setNumber] = useState('');
  const [email,setEmail] = useState('');
  // console.log(email);
  
  
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
       <div className="left">
       <Form name={name} setName={setName}  lname={lname} setLname={setLname}/>
       </div> 
    <div className="right">
    <Side name={name}  lname={lname}/>  

    </div>

       </>
  )
}
