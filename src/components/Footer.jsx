import React from 'react'

const Footer = () => {
  const openInfo=()=>{
    window.open('info', '_blank')
  }
  return (
    <div className='bg-gray-700 '>
    <div className='bg-gray-700 px-4 md:px-10 lg:px-15 flex py-20 w-full flex-wrap justify-between gap-3 items-center mx-auto '>
         <h2 className='text-xl md:text-2xl text-gray-500 font-bold'>D-ANSWER</h2>
        
         <div className='text-gray-500 font-bold mb-2'>
          <h3 className='text-white mb-4 '>MORE INFO</h3>
          <p className='mb-2'>ABOUT</p>
          <p className='mb-2 cursor-pointer hover:text-white' onClick={openInfo}>INFO</p>
          <p>FAQs</p>
        </div>

         <div className='text-gray-500 font-bold mb-2'>
         <h3  className='text-white mb-4 '>HELPFUL LINKS</h3>
          <p className='mb-2'>ABOUT</p>
          <p className='mb-2'>INFO</p>
          <p>FAQs</p>
         </div>
         
         <div className='text-gray-500 font-bold mb-2'>
         <h3  className='text-white mb-4 '>FIND OUT MORE</h3>
          <p className='mb-2'>ABOUT</p>
          <p className='mb-2'>INFO</p>
          <p>FAQs</p>
         </div>
    </div>
   <a href='#Home'><h3 className='text-center text-gray-500 py-3 cursor pointer hover:text-white'>HOME</h3></a>
    <h3 className='text-gray-500 text-[10px] md:text-[15px] font-bold text-center w-full  pb-10'>2025 CODED BY TOSIN JOSEPH. IMAGES BY UNSPLASH</h3>
    </div>
  )
}

export default Footer