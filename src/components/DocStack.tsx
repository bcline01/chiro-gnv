
// import React from 'react';
import Man1 from '../assets/man1.png';
import Man2 from '../assets/man2.png';
import Man3 from '../assets/man3.png';
import Man4 from '../assets/doc-4.png';
import '../styles/DocStack.css';

const DocStack = () => {
  return (
    <div className="doc-stack">
      <div className="doc-item">
        <img src={Man1} alt="Man 1" className="doc-image" />
        <p>Dr. Matthew Richeson</p>
      </div>
      <div className="doc-item">
        <img src={Man2} alt="Man 2" className="doc-image" />
        <p>Dr. Matthew Cline</p>
      </div>
      <div className="doc-item">
        <img src={Man3} alt="Man 3" className="doc-image" />
        <p>Dr. Cooper Cline</p>
      </div>
      <div className="doc-item">
        <img src={Man4} alt="Man 4" className="doc-image" />
        <p>Dr. Kent Owens</p>
      </div>
    </div>
  );
};

export default DocStack;

