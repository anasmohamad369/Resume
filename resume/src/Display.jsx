import React from 'react'
import Side from './preview/Side';
import { Form } from './Resumeedit/Form';
import { useState } from 'react';
import './Display.css'
export const Display = () => {
    const [name, setName] = useState('');
    const [lname, setLname]= useState('');
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
