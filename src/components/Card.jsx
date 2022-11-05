import React from 'react';
import {AiFillStar} from 'react-icons/ai';

const Card = ({title, photo, superHost, type, beds, rating}) => {
  return (
    <div>
      <div className='w-[350px] h-[240px]'>
        <img className='w-full h-full rounded-3xl' src={photo} alt={title} />
      </div>
      <div className='mt-3 w-full flex justify-between items-center'>
        <span>{superHost} <span className='font-medium text-[#828282] text-sm'>{type} . {beds} beds</span></span>
        <span className='flex items-center text-[#4F4F4F]'><AiFillStar className='text-[#EB5757B8]'/> {rating}</span>
      </div>
      <h1 className='mt-4 text-[#333] font-semibold'>{title}</h1>
    </div>
  )
}

export default Card