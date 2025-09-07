import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-4 mb-3 '>
      <div className='text-[8vw] hover:border-[#D3FD50] hover:text-[#D3FD50] h-24  flex items-center  leading-[6vw] uppercase lg:border-3 border-2 border-white rounded-full lg:px-14 px-2 pt-1 pb-5' >
        <Link className='text-[6vw] mt-6' to='/projects' >Projects</Link>
      </div>
    
      <div className='text-[8vw] hover:border-[#D3FD50] hover:text-[#D3FD50] h-24  flex items-center  leading-[6vw] uppercase lg:border-3 border-2 border-white rounded-full lg:px-14 px-2 pb-5' >
        <Link className='text-[6vw] mt-6' to='/agence' >Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
