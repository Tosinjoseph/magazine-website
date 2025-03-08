import React from 'react'

const Traveltwo = () => {
  return (
    <div className='overflow-hidden w-full gap-40  flex flex-col md:flex-row  justify-center mx-auto '>
     
     <div className='justify-start bg-blue-50 w-full px-18  md:w-1/2 py-15'>
        <div className='bg-amber-800  w-30 h-2 mb-4'></div>
        <h2 className='text-4xl font-bold mb-4 text-gray-500'>This is my Second and Latest Post</h2>
        <p className='text-gray-500 mb-6'>I guess i just need to stockpile some 
            texts into some folder or something. So i 
            just go and copy them anytime i need them or 
            something. But i guess writing them like this 
            aids my typing skills too</p>
        <button className='py-3 px-12 border-3 cursor-pointer border-amber-800 text-amber-800'>READ MORE</button>
     </div>

     <div className='w-full md:w-150 pr-6 md:pr-20 lg:pr-32'>
     <img src="./impulse-post1.avif" alt=""  className='w-100 h-90 my-8 py-10 md:px-6 ' />
     </div>
    </div>
  )
}

export default Traveltwo