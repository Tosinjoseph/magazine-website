import React, { useState } from 'react'

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

const App = () => {
  const[menuShow, setMenuShow] =useState(false)
  const[message, setShow] =useState(false)
  return (
    <div>
      <Hero menuShow={menuShow} setMenuShow={setMenuShow} setShow={setShow} message={message} />
      <Travel/>
      <Subtravel/>
      <Travelpost/>
      <Subtravelpost setShow={setShow} message={message}/>
      <Traveltwo/>
      <Findout/>
      <Footer/>
      <Navi menuShow={menuShow} setMenuShow={setMenuShow}/>
      <Contact message={message} setShow={setShow}/>
    </div>
  )
}

export default App