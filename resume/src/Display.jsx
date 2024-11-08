import React from 'react'
import Side from './preview/Side';
import { Form } from './Resumeedit/Form';
import { useState } from 'react';

export const Display = () => {
    const [name, setName] = useState('');
  return (
       <>
        <Form name={name} setName={setName} />
        <Side name={name} />
       </>
  )
}
