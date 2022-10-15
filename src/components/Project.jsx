import React from 'react'
import proimg from "../assets/project-2.png"
import proimg2 from "../assets/Project-1.png"

const Project = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <a href='https://justiniyke-shoppingmall.vercel.app' target="_blank" rel="noreferrer">
      <img  className='w-400 h-300' src={proimg} alt='projectimage' />
      </a>
    </div>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <a href='https://justiniyke-shoppingmall.vercel.app' target="_blank" rel="noreferrer">
      <img  className='w-60 mx-auto' src={proimg2} alt='projectimage22' />
      </a>
    </div>
    </div>
  )
}

export default Project