import React from 'react';

const Footer = () => {
    const style={backgroundColor:'grey',color:'white',}
    return (
        <div style={style}>
<div className='mt-5 row d-flex justify-align-center' style={style} >
            
            <div className="col-md-4">
                <h4 className="mt-3 " style={{marginLeft:'20px'}} >Get you Know us</h4>
            <ul style={{listStyle: 'none'}}>
           <li ><a style={{color:'wheat'}} href="/">Career</a></li>
           <li><a  style={{color:'wheat'}}href="/">Blog</a></li>
           <li><a style={{color:'wheat'}} href="/">About us</a></li>
           <li><a  style={{color:'wheat'}}href="/">E-shop Relation</a></li>

           </ul>
        </div>
          <div className="col-md-4">

          <h4 className="mt-3" style={{marginLeft:'20px'}} >Make Money with Us</h4>
            <ul style={{listStyle: 'none',textAlign:'center'}}>
           <li ><a style={{color:'wheat'}} href="/">Sell products on E-shop</a></li>
           <li><a  style={{color:'wheat'}}href="/">Self-Publish with Us</a></li>
           <li><a style={{color:'wheat'}} href="/">Host an E-shop Hub</a></li>
           <li><a  style={{color:'wheat'}}href="/">Become an Affiliate</a></li>

           </ul>



          </div>
          <div className="col-md-4">
    
          <h4 className="mt-3"  style={{marginLeft:'20px'}}>Let us help you</h4>
            <ul style={{listStyle: 'none'}}>
           <li ><a style={{color:'wheat'}} href="/">Your Account</a></li>
           <li><a  style={{color:'wheat'}}href="/">Your Orders</a></li>
           <li><a style={{color:'wheat'}} href="/">Shipping Rates & Policies</a></li>
           <li><a  style={{color:'wheat'}}href="/">Returns & Replacements</a></li>
           <li><a  style={{color:'wheat'}}href="/">Manage Your Content and Devices</a></li>
           <li><a  style={{color:'wheat'}}href="/">Help</a></li>
           
           </ul>


       </div>
        </div >

         <p><span>&#169;</span>E-Shop 2020-2022</p> 





        </div>
       
    );
};

export default Footer;