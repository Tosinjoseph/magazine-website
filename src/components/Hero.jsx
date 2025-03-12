import React from 'react'
import Navbar from './Navbar.jsx'
import Subhero from './Subhero.jsx'

const Hero = ({setMenuShow}) => {
  return (
    <div id='Home' className='w-full min-h-screen bg-cover overflow-hidden' style={{backgroundImage: 'url("./impulse-hero.avif")'}}>
        <div className='bg-amber-700/20 absolute inset-0'></div>
        <Navbar setMenuShow={setMenuShow} className="relative"/>

        <div className='relative min-h-screen w-full px-4 md:px-20 lg:px-30 justify-center items-center mx-auto py-58'>
           <h1 className='text-white text-center items-center font-bold text-6xl md:text-7xl'>A taste of every Lifestyle</h1>
           <button className='bg-amber-800 hover:scale-105 justify-center cursor-pointer flex text-white mt-15 items-center mx-auto h-15 px-10'>READ THE BLOG</button>
          
        </div>
        <Subhero/>
    </div>
  )
}

export default Hero