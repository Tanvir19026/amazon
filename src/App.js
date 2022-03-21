

import './App.css';
import Banner from './Components/Banner/Banner';
import Catagories from './Components/Catagories/Catagories';
import Discount from './Components/Discount/Discount';
import DownBanner from './Components/DownBanner/DownBanner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';





function App() {
  return (
    <div className="App">
      
     <Header></Header>
     
    <Navbar ></Navbar>
    
    <Banner></Banner>
   <Catagories></Catagories>
   <DownBanner></DownBanner>
   <Discount></Discount>
   <Footer></Footer>

    </div>
  );
}

export default App;
