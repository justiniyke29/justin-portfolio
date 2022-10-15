import React from 'react'
import proimg from "../assets/project-2.png"

const Project = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Project
      </p>
      <p className='text-gray-300 py-4'>Ecommerce website</p>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <a href='https://justiniyke-shoppingmall.vercel.app' target="_blank" rel="noreferrer">
      <img  className='w-400 mx-auto' src={proimg} alt='projectimage' />
      </a>
    </div>
    </div>
  )
}

export default Project