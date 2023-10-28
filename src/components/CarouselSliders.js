import React, { useState } from 'react';
// import { Carousel } from 'flowbite-react';

function CarouselSliders(images) {

    const [activeIndex, setActiveIndex] = useState(0);
  
    const nextSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel-container">
        <div className="carousel">
          {images.map((image, index) => (
            <div key={index} className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}>
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>

    )
}

export default CarouselSliders;
