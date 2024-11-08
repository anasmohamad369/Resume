import React from 'react';
import './Side.css';

const Side = ({ name }) => {
  return (
    <div>
      <p>Live Preview: {name}</p>
    </div>
  );
};

export default Side;
