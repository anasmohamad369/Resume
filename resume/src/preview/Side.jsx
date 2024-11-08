import React from 'react';
import './Side.css';

const Side = ({ name ,lname}) => {
  return (
    <div>
      <p>Live Preview: {name}</p>
      <h1> preview {lname}</h1>
    </div>
  );
};

export default Side;
