import './App.css';
import Navbar  from './Components/Navbar';
import PreNavbar from './Components/preNavebar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Slider from './Components/Slider';
import data from "./data/data.json";
import Offers from "./Components/Offers";
import Heading from "./Components/Heading";
import StarProduct from './Components/StarProduct';
import HotAccessoriesMenu from './Components/HotAccessoriesMenu';
import HotAccessories from './Components/HotAccessories';
import ProductReviews from './Components/ProductReviews';
import Videos from "./Components/Videos";
import Banner from "./Components/Banner";
import Footer from './Components/Footer';
import NavOptios from './Components/NavOptios';
function App() {
  return (
    <Router> 
     <PreNavbar />
     <Navbar />

     <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

     <Slider start={data.banner.start}/>
     <Offers offer={data.offer}/>
     <Heading text="STAR PRODUCTS" />
     <StarProduct starProduct={data.starProduct}/>
     <Heading text="Hot Accessories"/>
     <HotAccessoriesMenu/>
     <Routes>
      <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />}>
      </Route> 
      <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}> 
       </Route>
      
       <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}></Route>
      
       <Route exact path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />}></Route>
       <Route exact path="/mobileAccessories" element={ <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />}></Route>
       </Routes>
       <Heading text="PRODUCT REVIEWS"/>
       <ProductReviews productReviews={data.productReviews}/>
       <Heading text = "Videos"/>
       <Videos videos={data.videos}/>
       <Heading text="IN THE PRESS" />
       <Banner banner={data.banner}/>
       <Footer footer={data.footer}/>
    </Router>
  
    );
}

export default App;
