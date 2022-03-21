import React from 'react';
import bannerImage from '../../4028484.jpg';
import bannerImage2 from '../../5567036.jpg';
import bannerImage3 from '../.././women.jpg';

import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {

  const style={height:'450px'}

    return (
        <div  className='row container-fluid '>
            <div  style={{paddingLeft:'40px'}} className='col-sm-12 col-md-12 col-lg-12'>
            <Carousel>
  <Carousel.Item style={style}>
    <img style={{height:'450px'}}
      className="d-block w-100"
      src={bannerImage}
      alt=""
    />
    
  </Carousel.Item>
  <Carousel.Item style={style}>
    <img style={{height:'450px'}}
      className="d-block w-100"
      src={bannerImage2}
      alt=""
    />

    
  </Carousel.Item>
  <Carousel.Item style={style}>
    <img style={{height:'450px'}}
      className="d-block w-100"
      src={bannerImage3}
      alt=""
    />

  
  </Carousel.Item>
</Carousel>
            </div>
            
        </div>
    );
};

export default Banner;