import React from 'react'
import './leftblock.css'
import first from "../public/images/content.png"

export default function VerticalRectangle(){
    return (
        <div className="inrectangle">

      <div className="rectangle">
       <a href="./Form.jsx"> 
        <button className="image-button">
          <img src={first} alt="Button 1" />  
        </button>
       </a>
       <a href='#'>

        <button className="image-button">
          <img src="./images/xyz.png" alt="Button 2" />
        </button>
        </a>

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


  
  

  