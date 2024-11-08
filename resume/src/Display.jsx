import React from 'react'
import Side from './preview/Side';
import { Form } from './Resumeedit/Form';
import { useState } from 'react';

export const Display = () => {
    const [name, setName] = useState('');
    const [lname , setLname]= useState('');
  return (
       <>
        <Form name={name} setName={setName}  lname={lname} setLname={setLname}/>
        <Side name={name} />
       </>
  )
}
