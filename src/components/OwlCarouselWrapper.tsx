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
        <div className='doc-image-container'>   
          <img 
            src={Man1} 
            alt="Man 1" 
          />
          <div className="col-md-6 doc-text">
            <p>Dr. Matthew Richeson</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="row align-items-center">
          <div className="col-md-6 image-pair">
            <img 
              src={Man2} 
              alt="Man 2" 
              className="img-fluid" 
            />
          </div>
          <div className="col-md-6 doc-text">
            <p>Dr. Matthew Cline</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="row align-items-center">
          <div className="col-md-6 image-pair">
            <img 
              src={Man3} 
              alt="Man 3" 
              className="img-fluid" 
            />
          </div>
          <div className="col-md-6 doc-text">
            <p>Dr. Cooper Cline</p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="row align-items-center">
          <div className="col-md-6 image-pair">
            <img 
              src={Man4} 
              alt="Man 4" 
              className="img-fluid" 
            />
          </div>
          <div className="col-md-6 doc-text">
            <p>Dr. Kent Owens</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default OwlCarouselWrapper;
