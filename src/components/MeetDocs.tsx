import React, { useEffect, useRef, useState } from 'react';
import '../styles/MeetDocs.css';
// import Man1 from '../assets/man1.png';
// import Man2 from '../assets/man2.png';
// import Man3 from '../assets/man3.png';
// import Man4 from '../assets/doc-4.png';
import DocStack from './DocStack';
import OwlCarouselWrapper from './OwlCarouselWrapper'; 

const MeetDocs: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Intersection Observer for triggering animation when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={sectionRef} className={`doc-page ${inView ? 'animate-line' : ''}`}>
      <div className='meet-doctors-text'>Meet Our Doctors</div>

      {isMobile ? <OwlCarouselWrapper /> : <DocStack />}
    </section>
  );
};

export default MeetDocs;
