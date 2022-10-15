import React from 'react'
import proimg from "../assets/project-2.png"

const Project = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Project
      </p>
    <div className='flex flex-col justify-center items-center w-full h-full ' >
    <p className='text-gray-300 py-4'>Ecommerce website</p>
      <a href='https://justiniyke-shoppingmall.vercel.app' target="_blank" rel="noreferrer">
      <img  className='w-auto mx-auto' src={proimg} alt='projectimage' />
      </a>
      <br/>
      <br />
    </div>
    </div>
  )
}

export default Project