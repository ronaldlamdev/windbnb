import React, { useContext } from 'react';
import {MdLocationPin} from 'react-icons/md';
import LocationContext from '../context/LocationContext';

const Locations = () => {

  const {setLocation} = useContext(LocationContext);

  return (
    <ul className='px-6 py-9'>
      <li onClick={() => setLocation('Helsinki, Finland')} className='location-option'>
        <MdLocationPin className='mr-2' /> Helsinki, Finland
      </li>
      <li onClick={() => setLocation('Turku, Finland')} className='location-option pt-9'>
        <MdLocationPin className='mr-2' /> Turku, Finland
      </li>
      <li onClick={() => setLocation('Oulu, Finland')} className='location-option py-9'>
        <MdLocationPin className='mr-2' /> Oulu, Finland
      </li>
      <li onClick={() => setLocation('Vaasa, Finland')} className='location-option'>
        <MdLocationPin className='mr-2' /> Vaasa, Finland
      </li>
    </ul>
  )
}

export default Locations