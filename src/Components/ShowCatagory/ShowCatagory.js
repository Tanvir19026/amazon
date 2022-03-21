import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ShowCategories.css'

const ShowCatagory = (pd) => {
  console.log(pd);
    return (
      
            <div  className="col-md-4 mt-5  container-fluid">
  <Card className="card-img-top" style={{ width: '20rem',marginLeft:'50px',height:'60%'}} >

  <Card.Title className='m-2'>{pd.pd.name}</Card.Title>

  <Card.Img  style={{width:'100%',margin:'0 auto',height:'220px'}}  variant="top" src={pd.pd.img}/>
  <Card.Body >

    <div className=" d-flex ">
        <Button  style={{width:'100%',margin:'0 auto',height:'80%'}}>See More</Button>
    </div>
   
  </Card.Body>
</Card>
        </div>
    
    );
};

export default ShowCatagory;