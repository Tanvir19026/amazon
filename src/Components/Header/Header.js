import React from 'react';
import logoImg from '../Header/download (2).png';
import { MDBCol, MDBIcon } from "mdbreact";
import '../Header/Header.css';
import cart from './cart.png';


const Header = () => {
  

    return (
       <div className="row">
            <div  className="d-flex align-items-center col-sm-12 col-md-12 col-lg-12 " >
            
            <div className="p-2">
           <img  style={{width:'190px'}} src={logoImg} alt="" />
    
            </div>
            <div className="p-5 flex-fill bd-highlight col-example ">
    
            <MDBCol md="12">
          <div className="input-group md-form form-sm form-1 pl-0">
            <div className="input-group-prepend">
              <span className="input-group-text purple lighten-3" id="basic-text1">
                <MDBIcon className="text-white" icon="search" />
              </span>
            </div>
            <input
              className="form-control my-0 py-1"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </MDBCol>
          </div>
    
    
            <div className="p-2 d-flex align-items-center   "> 
               <div className="p-2 d-flex align-items-center  " >
    
                   <h4>SignIn</h4>
    
                   <img style={{width:'30px'}}
      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
      class="rounded-circle"
     
      alt="Avatar"
    />
               </div >
              <div  className="p-2 d-flex align-items-center  ">
                <h4 className="p-2">Cart</h4>
                <img src={cart}style={{width:'40px'}} alt="" />
    
              </div>
            
            </div>
          </div>
       </div>
    );
};

export default Header;