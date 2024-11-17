import React, { useRef } from 'react';
import './Side.css';
import html2pdf from 'html2pdf.js';

const Side = ({ name, lname, number, email, location, inputValue, inputValueTwo, isGitFocused ,isLinkedFocused}) => {
  const pdfRef = useRef();

  const handleDownload = () => {
    const element = pdfRef.current;
    html2pdf().from(element).save(name || "User_Document");
  };

  return (
    <>
      <div
        ref={pdfRef}
        className="preview-container"
      >
        <div className="main">
          <div className="namecontent">
            <p>{name}</p>
            <p>{lname}</p>
          </div>
          <div className="personalcontact">
            <p>{number}</p>
            <a href={`mailto:${email}`}>{email}</a>
            <p>{location}</p>
            <div className="github-preview">
              {(isGitFocused || inputValue) && (
                <div style={{display:"flex"}}>
                  <img
                    src="/images/GitHub-Symbol.png"
                    alt="GitHub"
                    style={{ width: 'auto', height: '20px', marginRight: '5px' }}
                  />
                  {inputValue && (
                    <a
                      href={inputValue}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      Github
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className="github-preview">
              {(isLinkedFocused || inputValueTwo) && (
                <div style={{display:"flex"}}>
                  <img
                    src="/images/Linkedi.png"
                    alt="GitHub"
                    style={{ width: 'auto', height: '20px', marginRight: '5px' }}
                  />
                  {inputValue && (
                    <a
                      href={inputValueTwo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      Linked
                    </a>
                  )}
                </div>
              )}
            </div>

           
          </div>
        </div>
      </div>
      <button onClick={handleDownload}>Download PDF</button>
    </>
  );
};

export default Side;
