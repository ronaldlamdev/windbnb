import React from 'react';
import {AiFillStar} from 'react-icons/ai';

const Card = ({title, photo, superHost, type, beds, rating}) => {
  return (
    <div className='flex flex-col items-center text-center mx-auto w-full max-w-[457px] lg:max-w-[500px] cursor-pointer'>
      <div className='w-full h-[240px] lg:h-[300px]'>
        <img className='w-full h-full rounded-3xl' src={photo} alt={title} />
      </div>
      <div className='mt-3 w-full flex justify-between items-center mx-auto'>
        <span>{superHost} <span className='font-medium text-[#828282] text-sm lg:text-base'>{type} . {beds} beds</span></span>
        <span className='flex items-center text-[#4F4F4F] lg:text-lg'><AiFillStar className='text-[#EB5757B8]'/> {rating}</span>
      </div>
      <h1 className='mt-1 lg:mt-2 lg:text-lg mb-5 text-[#333] font-semibold self-start'>{title}</h1>
    </div>
  )
}

export default Card