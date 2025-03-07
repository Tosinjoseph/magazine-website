import React from 'react'

const Subtravelpost = () => {
  return (
    <div className='w-full flex overflow-hidden justify-center items-center mx-auto'>

        <div className='w-1/3 relative group justify-center items-center mx-auto '>
        <img src="./impulse-2.avif" className='w-full h-65 relative ' alt="" />
        <div className='bg-black/50 inset-0 absolute hidden group-hover:block '></div>
        <h3 className='absolute  w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hidden group-hover:block'>SANDY BEACHES</h3>
        </div>

        <div className='w-1/3 relative group justify-center items-center mx-auto'>
        <img src="./impulse-3.avif" className='w-full h-65 relative' alt="" />
        <div className='bg-black/50 inset-0 absolute hidden group-hover:block '></div>
        <h3 className='absolute  w-full  text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block'>FOREST TRAIL</h3>
        </div>

        <div className='w-1/3 relative group justify-center items-center mx-auto'>
        <img src="./impulse-1.avif" className='w-full relative h-65'  alt="" />
        <div className='bg-black/50 inset-0 absolute hidden group-hover:block '></div>
        <h3 className='absolute  w-full  text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2hidden group-hover:block'>CITY STREETS</h3>
        </div>
    </div>
  )
}

export default Subtravelpost