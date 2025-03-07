import React from 'react'

const Navbar = () => {
  return (
    <div className='px-4 md:px-20 lg:25 py-4 flex justify-between items-center mx-auto absolute top-0 left-0 right-0'>
       <img src="./navi-icon.png" alt="" className='cursor-pointer filter invert' />
       <h2 className='text-xl md:text-2xl font-bold text-white'>D-ANSWER</h2>
       <img src="./navi-icon.png" alt="" className='cursor-pointer filter invert'/>
    </div>
  )
}

export default Navbar