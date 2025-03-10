import React, { useEffect } from 'react'

const Contact = ({message, setShow}) => {
  
  return (
  <div className={`${message? '' : 'hidden' } absolute bottom-0 inset-0 bg-white z-2 h-[130vh]  `  } >

   <div>
    <div className='px-4 bg-amber-800 md:px-20 lg:25  py-8 flex justify-between items-center mx-auto '>
       <img onClick={()=>setShow(false)} src="./navi-icon.png" alt="" className='cursor-pointer  filter invert '  />
       <h2 className='text-xl md:text-2xl font-bold text-white'>D-ANSWER</h2>
       <img src="./message-icon-use.png" alt="" className='cursor-pointer z-1 filter invert'/>
    </div>
     <div className='overflow-hidden pt-20'>
        <h2 className='text-center text-gray-500 text-4xl font-bold'>Get in touch</h2>
     </div>


<div className='flex-col md:flex-row lg:flex px-6 md:px-25 lg:px-70 w-full gap-10 justify-between  py-14 items-center mx-auto'>
     <div className=' flex flex-col gap-3 py-10  mx-auto'>
      <span className='flex gap-2 text-gray-500 text-lg font-bold'>
         <img src="./call-icon.png" alt="" className='w-4 h-5' />
          <p>90 702 177 36</p>
      </span>
      <span className='flex gap-2 text-gray-500 text-lg font-bold'>  
         <img src="./message-icon-use.png" alt="" className='w-4 h-5' />
          <p>tosinjosephoffice2@gmail.com</p>
      </span>
      <span className='flex gap-2 text-gray-500 text-lg font-bold'>
         <img src="./call-icon.png" alt="" className='w-4 h-5' />
          <p>90 702 177 36</p>
      </span>
      <span className='flex gap-2 text-gray-500 text-lg font-bold'>
         <img src="./location-icon (2).png" alt="" className='w-4 h-5' />
          <p>Detroit, Michigan</p>
      </span>
     </div>


    <div className='py-6 items-center mx-auto w-full md:w-1/2'>
     <div className='flex flex-col mx-auto'>
      <h3 className='mb-2 text-gray-500 font-bold'>Name</h3>
      <input type="text" className='bg-gray-200 w-100 h-12 px-4' placeholder='Name'/>
     </div>
     <div className='pt-8'>
      <h3 className='mb-2 text-gray-500 font-bold'>Email Address</h3>
      <input type="email" className='bg-gray-200 w-100 h-12 px-4 ' placeholder='yourmail@gmail.com'/>
     </div>
     <div className='pt-8 flex flex-col mx-auto'>
      <h3 className='mb-2 text-gray-500 font-bold'>Message</h3>
      <textarea type="text" className='bg-gray-200 w-100 h-12 px-4 pt-2  '  placeholder='Your message'/>
     </div>
     <button type='submit' className='px-8 py-3 bg-amber-800 text-white mt-6 cursor-pointer'>SEND MESSAGE</button>
     </div>
  </div>
    </div>
   </div>
  )
}

export default Contact