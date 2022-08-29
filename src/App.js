import "./App.css";
import ReactDOM from "react-dom/client";
import CouponCarousel from "./components/CouponCarousel";
import CouponItem from "./components/CouponItem";
import {BrowserRouter, Route, Routes, Redirect} from 'react-router-dom'
function App(){
  return (
        <Routes>
          <Route exact path="/" element={ <CouponCarousel/>}></Route>
          <Route path="/:id" element= {<CouponItem/>}></Route>
        </Routes>
   
  );
}

export default App;
