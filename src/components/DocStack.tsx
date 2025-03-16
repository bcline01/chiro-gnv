
// import React from 'react';
// import Man1 from '../assets/man1.png';
// import Man2 from '../assets/man2.png';
// import Man3 from '../assets/man3.png';
// import Man4 from '../assets/doc-4.png';
import '../styles/DocStack.css';
import { Link } from 'react-router-dom';
import { doctors } from './doctors';

const DocStack = () => {
  return (
    <div className="doc-stack">
      {doctors.map((doctor) => (
        <div className="doc-item" key={doctor.id}>
          <img src={doctor.photo} alt={doctor.name} className="doc-image" />
          <p>{doctor.name}</p>
          <Link to={`/doctors/${doctor.id}`} className="learn-more-doc">Learn More</Link>
        </div>
      ))}
    </div>
  );
};

export default DocStack;

