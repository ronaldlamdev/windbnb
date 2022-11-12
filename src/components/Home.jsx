import React, {useContext} from 'react';
import Card from './Card';
import DataContext from '../context/DataContext';

const Home = () => {

  const {stays} = useContext(DataContext);

  return (
    <main className='mt-9 px-3'>
      <div className='home-headings-container'>
        <h1 className='text-lg text-[#333] font-bold'>Stays in Finland</h1>
        <span className='font-medium text-[#4F4F4F] lg:text-lg'>{stays.length} stays</span>
      </div>
      {(stays.length > 0) ? 
        <div className='grid-section'>
        {stays.map((stay, index) => (
          <Card key={index} 
          title={stay.title}
          photo={stay.photo}
          type={stay.type}
          beds={stay.beds}
          rating={stay.rating}
          superHost={(stay.superHost === true) ? <span className='superhost'>Super Host</span> : null}
    />
        ))}
      </div>
      :
      <div>No Stays Available</div>
      }
      
    </main>
  )
}

export default Home