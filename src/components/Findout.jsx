import React from 'react'

const Findout = () => {
  return (
    <div id='About' className='overflow-hidden  py-20 px-4 md:px-20 lg:px-30 items-center justify-center mx-auto  h-full w-full bg-cover bg-no-repeat' style={{backgroundImage: 'url("impulse-down.avif")'}}>
      <h1 className='text-white text-5xl md:text-6xl text-center font-bold  mt-40'>Endlessly Enjoyable</h1>
      <p className='text-white text-center mt-4'>I guess i just need to stockpile some 
      texts into some folder or something</p>
      <button className='bg-amber-800 hover:scale-105 justify-center mb-30 cursor-pointer flex text-white mt-15 items-center mx-auto h-15 px-10'>FIND OUT MORE</button>
    </div>
  )
}

export default Findout