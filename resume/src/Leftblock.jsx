import React from 'react'
import './leftblock.css'
import first from "../public/images/content.png"

export default function VerticalRectangle(){
    return (
        <div className="inrectangle">

      <div className="rectangle">
        <button className="image-button">
          <img src={first} alt="Button 1" />  
        </button>
        <button className="image-button">
          <img src="./images/xyz.png" alt="Button 2" />
        </button>
        <button className="image-button">
          <img src="./images/xyz.png" alt="Button 3" />
        </button>
        <button className="image-button">
          <img src="./images/xyz.png" alt="Button 4" />
        </button>
      </div>
      </div>

    );
  };


  
  

  