import React from 'react';

export const Form = ({ Fname, setName ,lname,setLname}) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    const formData = {
      firstName: Fname,
      lastName: lname
    };

    localStorage.setItem('userData', JSON.stringify(formData));

    alert('Data has been saved to local storage!');
  };
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
      <input type = "submit" />
    </>
  );
};
    