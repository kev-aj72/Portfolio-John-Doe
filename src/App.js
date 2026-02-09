import React from "react";
import { Route, Routes,} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Mentions from "./pages/MentionsLegales";
import Navbar from "./components/Header";
import Footbar from "./components/Footer";



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


