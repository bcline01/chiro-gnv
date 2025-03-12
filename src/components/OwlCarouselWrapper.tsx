// OwlCarouselWrapper.tsx
import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import OwlCarousel from 'react-owl-carousel';
import Man1 from '../assets/man1.png';
import Man2 from '../assets/man2.png';
import Man3 from '../assets/man3.png';
import Man4 from '../assets/doc-4.png'; 
import '../styles/OwlCarouselWrapper.css';

const options = {
  items: 1,
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: false,
  responsive: {
    0: { items: 1 },
    400: { items: 1 },
    600: { items: 1 },
    700: { items: 1 },
    800: { items: 1 },
    1000: { items: 1 }
  }
};

const OwlCarouselWrapper: React.FC = () => {
    const [OwlCarousel, setOwlCarousel] = useState<any>(null);

    useEffect(() => {
        import('react-owl-carousel').then((module) => {
          setOwlCarousel(() => module.default);
        });
      }, []);
    
      if (!OwlCarousel) {
        return <div>Loading...</div>;
      }

  return (
    <OwlCarousel className="owl-theme" {...options}>
    <div className="carousel-item">
        <div className='doc-image-container'>   
          <img 
            src={Man1} 
            alt="Man 1" 
            // className="img-fluid " 
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
            className="img-fluid " 
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
            className="img-fluid " 
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
            className="img-fluid " 
          />
        </div>
        <div className="col-md-6 doc-text">
          <p>Dr. Kent Owens</p>
        </div>
      </div>
    </div>
    
  </OwlCarousel>
  );
};


export default OwlCarouselWrapper;
