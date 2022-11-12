import React, { useContext } from 'react';
import {MdLocationPin} from 'react-icons/md';
import LocationContext from '../context/LocationContext';
import {data} from '../assets/data/stays.js'
const Locations = () => {

  const {setLocation} = useContext(LocationContext);
  const Helsinki = data[0].city
  const Turku = data[1].city
  const Vaasa = data[5].city
  const Oulu = data[7].city

  return (
    <ul className='px-6 py-9'>
      <li onClick={() => setLocation(Helsinki)} className='location-option'>
        <MdLocationPin className='mr-2' /> Helsinki, Finland
      </li>
      <li onClick={() => setLocation(Turku)} className='location-option pt-9'>
        <MdLocationPin className='mr-2' /> Turku, Finland
      </li>
      <li onClick={() => setLocation(Oulu)} className='location-option py-9'>
        <MdLocationPin className='mr-2' /> Oulu, Finland
      </li>
      <li onClick={() => setLocation(Vaasa)} className='location-option'>
        <MdLocationPin className='mr-2' /> Vaasa, Finland
      </li>
    </ul>
  )
}

export default Locations