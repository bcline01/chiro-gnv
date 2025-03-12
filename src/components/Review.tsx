import React, { useState } from 'react';
import Slider from 'react-slick'; // Import react-slick
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme CSS
import Star from '../assets/stars.png';
import '../styles/Review.css';
import { reviews } from '../components/seedData';

// Options for the Slider (react-slick)
const options = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  adaptiveHeight: true, // Adjusts the height to fit content
};

const getRandomReviews = () => {
  // Shuffle the reviews array and get the first 3
  const shuffledReviews = [...reviews].sort(() => 0.5 - Math.random());
  return shuffledReviews.slice(0, 3);
};

const Review: React.FC = () => {
  const [randomReviews] = useState(getRandomReviews()); // Get 3 random reviews

  console.log(randomReviews); // Log the reviews to check if they are being fetched correctly

  return (
    <section className="page-review">
      {/* Use Slider instead of OwlCarousel */}
      <Slider {...options}>
        {randomReviews.map((review, index) => (
          <div key={index} className="slick-slide">
            <div className="review-content">
              <div className="img-section">
                <img
                  src={Star}
                  alt="Star"
                  className="img-fluid"
                  style={{ maxWidth: '70%', height: 'auto', maxHeight: '100px', borderRadius: '6px' }}
                />
              </div>
              <div className="text-column">
                <div className='review-text'>
                  "{review.review}"
                  <br />
                  <strong>- {review.name}</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Review;
