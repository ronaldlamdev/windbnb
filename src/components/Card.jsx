import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const Card = ({title, photo, superHost, type, beds, rating}) => {
  return (
    <div>
      <div className='w-[350px] h-[240px]'>
        <img className='w-full h-full rounded-3xl' src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80" alt="room" />
      </div>
      <div className='mt-3 w-full flex justify-between items-center'>
        <span><span className='px-2 py-[6px] border text-[.75rem] font-bold border-[#4F4F4F] rounded-2xl'>Super Host</span> <span className='font-medium text-[#828282] text-sm'>Entire apartment . 2 beds</span></span>
        <span className='flex items-center text-[#4F4F4F]'><AiFillStar className='text-[#EB5757B8]'/> 4.4</span>
      </div>
      <h1 className='mt-4 text-[#333] font-semibold'>Stylist apartment in center of the city</h1>
    </div>
  )
}

export default Card