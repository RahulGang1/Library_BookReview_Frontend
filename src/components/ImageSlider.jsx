import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    'https://bookproject-preetidiwakargithubs-projects.vercel.app/photos/p1.jpg',
    'https://bookproject-preetidiwakargithubs-projects.vercel.app/photos/p2.jpg',
    'https://bookproject-preetidiwakargithubs-projects.vercel.app/photos/p3.jpg',
    'https://bookproject-preetidiwakargithubs-projects.vercel.app/photos/p4.jpg',
    'https://bookproject-preetidiwakargithubs-projects.vercel.app/photos/p5.jpg',
    'https://bookproject-preetidiwakargithubs-projects.vercel.app/photos/p6.jpg',
    'https://bookproject-preetidiwakargithubs-projects.vercel.app/photos/p7.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container" >
      <img
      className='logoIMG'
        src={images[currentIndex]}
        alt="slider"
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 1s ease-in-out' }}
      />
    </div>
  );
};

export default ImageSlider;
