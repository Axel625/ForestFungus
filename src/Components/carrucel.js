import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import fonodo1 from "../Assets/FLYER COKI.png"
import fonodo2 from "../Assets/flyervicfungus.png"
import fonodo3 from "../Assets/fond.png"
import fonodo4 from "../Assets/Forest.png"

const ImageCarousel = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={5000} showThumbs={false}>
         <div>
        <img src={fonodo4} alt="large" style={{ width: '900px', height: 'auto' }} />
      </div>
      <div>
        <img src={fonodo1} alt="large" style={{ width: '400px', height: 'auto' }}/>
      </div>
      <div>
        <img src={fonodo2} alt="large" style={{ width: '900px', height: 'auto' }}/>
      </div>
      <div>
        <img src={fonodo3} alt="large" style={{ width: '900px', height: 'auto' }} />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
