import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '.././special-sale-banner-for-online-shopping-vector.jpg';
import img2 from '.././5594188.jpg';
import img3 from '.././big-sale-banner-with-abstract-shapes_1017-31302.webp'

const Discount = () => {
    const style={width:'85%',height:'350px',paddingLeft:'170px'}
    return (
        <div  className='mt-5 text-primary'>
        <h2>Discount For You </h2>
        <div className='mt-3'>

        <Carousel fade>
  <Carousel.Item style={style}>
    <img  style={{height:'450px',borderRadius:'30px'}}
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item style={style}>
    <img
      className="d-block w-100 "
      style={{height:'450px',borderRadius:'30px'}}
      src={img2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item style={style}>
    <img   style={{height:'450px',borderRadius:'30px'}}
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel >

        </div>


          
    
        </div>
    );
};

export default Discount;