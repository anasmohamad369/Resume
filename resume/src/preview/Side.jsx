import React , { useRef } from 'react';
import './Side.css';

import html2pdf from 'html2pdf.js';

const Side = ({ name ,lname}) => {
  const pdfRef = useRef();

  const handleDownload = () => {
    const element = pdfRef.current;
    html2pdf()
      .from(element)
      .save('my-file.pdf');
  };
  return (
    <>
 <div ref={pdfRef} style={{ padding: '20px', background: '#fff' }}>
    <div className='main'>
     <div className="namecontent">
     <p>{name}</p>
     <p> {lname}</p>
   
     </div> 
    

      <button onClick={handleDownload}>Download PDF</button>
</div>
    </div>
    
    </>
  
  );
};

export default Side;
