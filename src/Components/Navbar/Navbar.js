import React from 'react';
import{Dropdown,Nav} from 'react-bootstrap';

const navbar = () => {

const style={
   
backgroundColor:'grey',
width:'100%',
height:'60px',


}

    return (
        <div style={style} className='d-flex align-items-center container-fluid '>
            
          <div className='p-2 '>
          <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    All Category
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Mens Deal</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Womens Deal</Dropdown.Item>
    <Dropdown.Item href="#/action-3"> Baby Deal</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Gaming Zone</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Electronics Zone</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Personal Accessoires</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        



          </div>

          <div style={{color:'wheat',fontSize:'20px'}} className='d-flex  align-items-center p-5   ' >
          <Nav 
  activeKey="/home"

>
  <Nav.Item >
    <Nav.Link className='text-warning' href="/home">Discount</Nav.Link>
  </Nav.Item>
  <Nav.Item >
    <Nav.Link className='text-warning' >Today,s Deals</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className='text-warning'>GiftCard</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link className='text-warning'>Coupon</Nav.Link>
 
  </Nav.Item>
  <Nav.Item>
  <Nav.Link className='text-warning'>Customer Service</Nav.Link>
 
  </Nav.Item>
  <Nav.Item>
  <Nav.Link className='text-warning'>Registration</Nav.Link>
 
  </Nav.Item>
  <Nav.Item>
  <Nav.Link className='text-warning'>Reviews</Nav.Link>
 
  </Nav.Item>


</Nav>
            

          </div>




        </div>
    );
};

export default navbar;