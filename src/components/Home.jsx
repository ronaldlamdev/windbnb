import React from 'react'
import Card from './Card'

const Home = () => {
  return (
    <main className='mt-9'>
      <div className='w-full flex justify-between items-center'>
        <h1 className='text-lg text-[#333] font-bold'>Stays in Finland</h1>
        <span className='font-medium text-[#4F4F4F]'>12+ stays</span>
      </div>
      <div>
        <Card />
      </div>
    </main>
  )
}

export default Home