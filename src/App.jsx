import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './components/Hero.jsx'
import Travel from './components/Travel.jsx'
import Subtravel from './components/Subtravel.jsx'
import Travelpost from './components/Travelpost.jsx'
import Subtravelpost from './components/Subtravelpost.jsx'
import Traveltwo from './components/Traveltwo.jsx'
import Findout from './components/Findout.jsx'
import Footer from './components/Footer.jsx'
import Navi from './components/Navi.jsx'
import Contact from './components/Contact.jsx'
import Info from './components/Info.jsx';


const App = () => {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <>
              <Hero menuShow={menuShow} setMenuShow={setMenuShow} />
              <Travel />
              <Subtravel />
              <Travelpost />
              <Subtravelpost />
              <Traveltwo />
              <Findout />
              <Footer />
              <Navi menuShow={menuShow} setMenuShow={setMenuShow} />
            </>
          }
        />
        <Route path="/contact" element={
          <>
          <Contact />
           <Footer /> 
          </>} />
          <Route path='/info' element={
            <>
            <Info/>
            <Footer/>
            </>} />r
      </Routes>
    </Router>
  );
};

export default App;
