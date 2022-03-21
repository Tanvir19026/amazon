import React from 'react';
import keybord from '../.././images.jpg';
import personal from '.././download (1).jpg'
import ShowCatagory from '../ShowCatagory/ShowCatagory';
import womenImage from '.././beauty_makeup_design_elements_personal_accessories_girl_icons_6834366.jpg';
import electronicImage from '.././images.jpg';
import mensWorld from '.././istockphoto-638385938-170667a.jpg';
import babyImage from '.././912FJ13FMGL._AC_SX425_.jpg';





const Catagories = () => {
const catagorieses = [
   { name:'Gaming accessories',
   img:keybord},
   { name:'Personal  accessories',
   img:personal},
   { name:'Electronic Device',
   img:electronicImage},
   { name:'Mens Deal',
   img:mensWorld},
   { name:'womens  Deal',
   img:womenImage},
   { name:'Baby Care',
   img:babyImage}

]
    return (
       
            <div className='row  mt-5'>
                <h2 className='text-danger'>Categories</h2>
           {
               catagorieses.map(pd =><ShowCatagory pd={pd}></ShowCatagory> )
           }
            
        </div>
        
    );
};

export default Catagories;