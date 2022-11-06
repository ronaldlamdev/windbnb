import React, {useContext, useState} from 'react'
import Card from './Card'
import DataContext from '../context/DataContext';

const Home = () => {

  const {rooms} = useContext(DataContext)

  return (
    <main className='mt-9 px-3'>
      <div className='w-full flex justify-between items-center lg:px-24 xl:px-26 2xl:px-28 min-[1600px]:px-40'>
        <h1 className='text-lg text-[#333] font-bold'>Stays in Finland</h1>
        <span className='font-medium text-[#4F4F4F] lg:text-lg'>12+ stays</span>
      </div>
      <div className='py-5 grid grid-cols-1 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:px-24'>
        {rooms.map((room, index) => (
          <Card key={index} 
          title={room.title}
          photo={room.photo}
          type={room.type}
          beds={room.beds}
          rating={room.rating}
          superHost={(room.superHost === true) ? <span className='px-2 py-[6px] border text-[.75rem] font-bold border-[#4F4F4F] rounded-2xl lg:text-base'>Super Host</span> : null}
    />
        ))}
      </div>
    </main>
  )
}

export default Home