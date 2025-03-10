import React from 'react'

const Subtravelpost = () => {
  return (
    <div className='w-full flex-col md:flex-row lg:flex justify-center items-center mx-auto'>

        <div className='w-full md:w-1/3 relative group justify-center items-center mx-auto '>
        <img src="./impulse-2.avif" className='w-full h-65 relative ' alt="" />
        <div className='bg-black/50 inset-0 absolute hidden group-hover:block '></div>
        <h3 className='absolute  w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hidden group-hover:block'>SERENE PARKS</h3>
        </div>

        <div className='w-1/2 md:w-1/3 relative group justify-center items-center mx-auto '>
        <img src="./impulse-3.avif" className='w-full h-65 relative ' alt="" />
        <div className='bg-black/50 inset-0 absolute hidden group-hover:block '></div>
        <h3 className='absolute  w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hidden group-hover:block'>SANDY BEACHES</h3>
        </div>

        <div className='w-full md:w-1/3 relative group justify-center items-center mx-auto '>
        <img src="./impulse-1.avif" className='w-full h-65 relative ' alt="" />
        <div className='bg-black/50 inset-0 absolute hidden group-hover:block '></div>
        <h3 className='absolute  w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hidden group-hover:block'>CITY STREETS</h3>
        </div>
    </div>
  )
}

export default Subtravelpost