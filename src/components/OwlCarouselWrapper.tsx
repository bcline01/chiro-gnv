import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme CSS
import Man1 from '../assets/man1.png';
import Man2 from '../assets/man2.png';
import Man3 from '../assets/man3.png';
import Man4 from '../assets/doc-4.png'; 
import '../styles/OwlCarouselWrapper.css';

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
      <div className="carousel-item">
        <div className="doc-item">
          <img 
            src={Man1} 
            alt="Dr. Matthew Richeson" 
          />
          <h3>Dr. Matthew Richeson</h3>
          <p>Chiropractor and Wellness Specialist</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="doc-item">
          <img 
            src={Man2} 
            alt="Dr. Matthew Cline" 
          />
          <h3>Dr. Matthew Cline</h3>
          <p>Chiropractor and Wellness Specialist</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="doc-item">
          <img 
            src={Man3} 
            alt="Dr. Cooper Cline" 
          />
          <h3>Dr. Cooper Cline</h3>
          <p>Chiropractor and Wellness Specialist</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="doc-item">
          <img 
            src={Man4} 
            alt="Dr. Kent Owens" 
          />
          <h3>Dr. Kent Owens</h3>
          <p>Chiropractor and Wellness Specialist</p>
        </div>
      </div>
    </Slider>
  );
};

export default OwlCarouselWrapper;
