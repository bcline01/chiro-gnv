import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme CSS
import Man1 from '../assets/man1.png';
import Man2 from '../assets/man2.png';
import Man3 from '../assets/man3.png';
import Man4 from '../assets/doc-4.png'; 
import { doctors } from './doctors';
import '../styles/OwlCarouselWrapper.css';
import { Link } from 'react-router-dom';

// Options for react-slick carousel
const options = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  adaptiveHeight: true, // Adjusts the height to fit content
};

const OwlCarouselWrapper: React.FC = () => {
  return (
    <Slider {...options}>
      {doctors.map((doctor) => (
        <div className="carousel-item" key={doctor.id}>
          <div className="doc-item">
            <img 
              src={doctor.photo} 
              alt={doctor.name} 
              className="doc-image" 
            />
            <h3>{doctor.name}</h3>
            <Link to={`/doctors/${doctor.id}`} className="learn-more-doc">
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};


export default OwlCarouselWrapper;
