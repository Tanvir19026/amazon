import React from 'react';
import { Carousel } from 'react-bootstrap';
import fashion from '../fashion-banner.jpg';
import menfashion from '../istockphoto-1293366109-170667a.jpg';
import mobile from '../PHONE-UNDER-30K-BANNER.jpg'

const DownBanner = () => {
const style={width:'85%',height:'350px',paddingLeft:'170px'}

    return (
        <div className='row  mt-5' >
            <div className="col-md-12">
               <h2 className='text-warning'>Popular Products for you</h2>
               
              <div className='mt-5'> 
              <Carousel fade>
  <Carousel.Item style={style}>
    <img  style={{height:'450px',borderRadius:'30px'}}
      className="d-block w-100"
      src={fashion}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item style={style}>
    <img
      className="d-block w-100 "
      style={{height:'450px',borderRadius:'30px'}}
      src={menfashion}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item style={style}>
    <img   style={{height:'450px',borderRadius:'30px'}}
      className="d-block w-100"
      src={mobile}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel >


              </div>
               
             


            </div>
            
        </div>
    );
};

export default DownBanner;