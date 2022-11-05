import React, {useState} from 'react'
import Card from './Card'
import Data from '../assets/data/stays.json';

const Home = () => {

  const [rooms, setRooms] = useState(Data);

  return (
    <main className='mt-9'>
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-lg text-[#333] font-bold'>Stays in Finland</h1>
        <span className='font-medium text-[#4F4F4F]'>12+ stays</span>
      </div>
      <div className='py-5'>
        {rooms.map((room, index) => (
          <Card key={index} 
          title={room.title}
          photo={room.photo}
          type={room.type}
          beds={room.beds}
          rating={room.rating}
          superHost={(room.superHost === true) ? <span className='px-2 py-[6px] border text-[.75rem] font-bold border-[#4F4F4F] rounded-2xl'>Super Host</span> : null}
    />
        ))}
      </div>
    </main>
  )
}

export default Home