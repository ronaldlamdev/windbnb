import React from 'react';
import {AiFillStar} from 'react-icons/ai';

const Card = ({title, photo, superHost, type, beds, rating}) => {
  return (
    <div className='card-container'>
      <div className='w-full h-[240px] lg:h-[300px]'>
        <img className='w-full h-full rounded-3xl' src={photo} alt={title} />
      </div>
      <div className='card-container-headings'>
        <span>{superHost} <span className='card-container-traits'>{type} . {beds} beds</span></span>
        <span className='flex items-center text-[#4F4F4F] lg:text-lg'><AiFillStar className='text-[#EB5757B8]'/> {rating}</span>
      </div>
      <h1 className='card-title'>{title}</h1>
    </div>
  )
}

export default Card