import React from 'react'

const Subhero = () => {
  const openContactPage=()=>{
    window.open('/contact', '_blank')
  };
  return (
    <div className='absolute w-full px-4 md:px-20 lg:px-25 justify-center mx-auto items-center bottom-10'>
        <ul className='flex justify-between'>
        <a href="#Find" className='hover:underline underline-offset-4 text-white '>FIND OUT MORE</a>
        <a onClick={openContactPage} href="" className='hover:underline underline-offset-4 text-white'>GET IN TOUCH</a>
       </ul>  
    </div>
  )
}

export default Subhero