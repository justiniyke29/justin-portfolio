import React from 'react'
import proimg from "../assets/project-2.png"

const Project = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <a href='https://justiniyke-shoppingmall.vercel.app' target="_blank">
      <img className='project-img' src={proimg} alt='projectimage' />
      </a>
    </div>
  )
}

export default Project