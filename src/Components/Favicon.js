import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Card component to display individual items
const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Carousel = () => {
  // Sample data for the carousel
  const data = [
    { id: 1, title: 'Card 1', description: 'Description for Card 1' },
    { id: 2, title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, title: 'Card 3', description: 'Description for Card 3' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: index => setCurrentSlide(index)
  };

  const goToNextSlide = () => {
    if (currentSlide < data.length - 1) {
      setCurrentSlide(currentSlide + 1);
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div>
      <h2>Carousel</h2>
      <Slider {...settings} ref={sliderRef}>
        {data.map(item => (
          <Card key={item.id} title={item.title} description={item.description} />
        ))}
      </Slider>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={goToPrevSlide} style={{ marginRight: '10px' }} disabled={currentSlide === 0}>
          Previous
        </button>
        <button onClick={goToNextSlide} disabled={currentSlide === data.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
