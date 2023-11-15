import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import fonodo2 from "../Assets/flyervicfungus.png";
import fonodo3 from "../Assets/fond.png";
import fonodo4 from "../Assets/Forest.png";

const ImageCarousel = () => {
  const imageStyle = {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  };

  const carouselContainerStyle = {
    maxWidth: '100%',
    height: '100vh',
    backgroundColor: '#333',
    borderRadius: '0',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={carouselContainerStyle}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={2500}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        emulateTouch={true}
        transitionEffect="fade" 
        transitionAxis="vertical" 
      >
        <div>
          <img src={fonodo4} alt="large" style={imageStyle} />
        </div>
        <div>
          <img src={fonodo2} alt="large" style={imageStyle} />
        </div>
        <div>
          <img src={fonodo3} alt="large" style={imageStyle} />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
