import React from 'react';

export const Form = ({ Fname, setName }) => {
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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};
    