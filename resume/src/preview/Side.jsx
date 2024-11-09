import React from 'react';
import './Side.css';

const Side = ({ name ,lname}) => {
  return (
    <div>
      <p>Live Preview: {name}</p>
      <p>preview : {lname}</p>
    </div>
  );
};

export default Side;
