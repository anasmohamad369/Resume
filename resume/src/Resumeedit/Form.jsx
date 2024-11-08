import React from 'react';

export const Form = ({ Fname, setName ,lname,setLname}) => {
  return (
    <>
      <input
        type="text"
        name="FirstName"
        value={Fname}
        onChange={(e) => setName(e.target.value)}
      />
      
       <input
        type="text"
        name="lastName"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
    </>
  );
};
    