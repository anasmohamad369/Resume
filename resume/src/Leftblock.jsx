import React from 'react';
import { Link } from 'react-router-dom';
import './leftblock.css';
import first from '../public/images/content.png';

export default function VerticalRectangle() {
  return (
    <div className="inrectangle">
      <div className="rectangle">
        <Link to="/">
          <button className="image-button">
            <img src={first} alt="Button 1" />
          </button>
        </Link>

        <Link to="/formone">
          <button className="image-button">
            <img src="/images/xyz.png" alt="Button 2" />
          </button>
        </Link>

        <button className="image-button">
          <img src="/images/xyz.png" alt="Button 3" />
        </button>

        <button className="image-button">
          <img src="/images/xyz.png" alt="Button 4" />
        </button>
      </div>
    </div>
  );
}
