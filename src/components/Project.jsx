import React from 'react'
import proimg from "../../public/project-2.png"
import proimg2 from "../../public/Project-1.png"

const Project = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <a href='https://justiniyke-shoppingmall.vercel.app' target="_blank">
      <img className='project-img' src={proimg} alt='projectimage' />
      </a>
      <a href='https://justiniyke-shoppingmall.vercel.app' target="_blank">
      <img className='project-img' src={proimg2} alt='projectimage' />
      </a>
    </div>
  )
}

export default Project