import React, { useRef } from 'react';
import './Side.css';
import html2pdf from 'html2pdf.js';

const Side = ({ name, lname ,number ,email,git,linked}) => {
  const pdfRef = useRef();

  const handleDownload = () => {
    const element = pdfRef.current;
    html2pdf().from(element).save(name);
  };

  return (
    <>
     <div ref={pdfRef} style={{ padding: '20px', background: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '20px' }}>

        <div className='main'>
          <div className="namecontent">
            <p>{name}</p>
            <p>{lname}</p>
           
          </div>
          <div className="personalcontact">
          <p>{number}</p>
          <a href={`mailto:${email}`}>{email}</a>

          <a href={git}>{git}</a>
          <a href={linked}> {linked} </a>
        </div>

        </div>
      </div>
      <button onClick={handleDownload}>Download PDF</button>
    </>
  );
};

export default Side;
