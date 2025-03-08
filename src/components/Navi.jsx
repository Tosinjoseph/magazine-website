import React from 'react'

const Navi = ({menuShow, setMenuShow}) => {
  return (
    <div className={`fixed z-200 inset-0 ${menuShow? 'w-full' : 'hidden'} 
    z-30 bg-fuchsia-100 px-4 md:px-15 lg:px-20`}>
        <div>
            <img src="./cross-desktop.png" alt="" className='w-10 mt-6 cursor-pointer' onClick={()=>setMenuShow(false)} />
        </div>

        <ul className={`flex flex-col text-center py-40 font-bold text-amber-800
             text-2xl items-center justify-center mx-auto`}>
        <a href="#Home" onClick={()=>setMenuShow(false)} className='mb-4'>HOME</a>
        <a href="#Blog" onClick={()=>setMenuShow(false)}  className='mb-4'>BLOG</a>
        <a href="#About" onClick={()=>setMenuShow(false)} className='mb-4'>ABOUT</a>
        <a href="#Contact" onClick={()=>setMenuShow(false)} className='mb-4'>CONTACT</a>
        </ul>
    </div>
  )
}

export default Navi