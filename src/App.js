import React from "react";
import { Route, Routes,} from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Mentions from "./pages/mentionslegales";
import Navbar from "./components/header";
import Footbar from "./components/footer";

export default function App() {

  return ( 
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/Portfolio" element={<Portfolio/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Mentions" element={<Mentions/>}></Route>
        </Routes>
        <Footbar/>
    </div>

  )
}


