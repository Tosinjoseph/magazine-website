import React from 'react'

const Contact = ({message, setShow}) => {
  return (
    <div className={`${message? '' : 'hidden' } fixed inset-0 bg-white`}>

     <div>
    <div className='px-4 bg-amber-800 md:px-20 lg:25  py-8 flex justify-between items-center mx-auto '>
       <img onClick={()=>setShow(false)} src="./navi-icon.png" alt="" className='cursor-pointer z-1 filter invert '  />
       <h2 className='text-xl md:text-2xl font-bold text-white'>D-ANSWER</h2>
       <img src="./message-icon-use.png" alt="" className='cursor-pointer z-1 filter invert'/>
    </div>
    <div className='overflow-hidden pt-12'>
        <h2 className='text-center text-gray-500 text-4xl font-bold'>Get in touch</h2>
    </div>
    </div>
    </div>
  )
}

export default Contact