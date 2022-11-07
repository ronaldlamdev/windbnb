import React, { useContext } from 'react'
import {MdLocationPin} from 'react-icons/md'
import LocationContext from '../context/LocationContext'

const Locations = () => {

  const {setLocation} = useContext(LocationContext);

  return (
    <ul className='px-6 py-9'>
      <li onClick={() => setLocation('Helsinki, Finland')} className='flex w-fit items-center cursor-pointer text-[#4F4F4F] font-medium hover:text-[#828282] hover:underline hover:underline-offset-2 duration-500'>
        <MdLocationPin className='mr-2' /> Helsinki, Finland
      </li>
      <li onClick={() => setLocation('Turku, Finland')} className='flex w-fit items-center pt-9 cursor-pointer text-[#4F4F4F] font-medium hover:text-[#828282] hover:underline hover:underline-offset-2 duration-500'>
        <MdLocationPin className='mr-2' /> Turku, Finland
      </li>
      <li onClick={() => setLocation('Oulu, Finland')} className='flex w-fit items-center py-9 cursor-pointer text-[#4F4F4F] font-medium hover:text-[#828282] hover:underline hover:underline-offset-2 duration-500'>
        <MdLocationPin className='mr-2' /> Oulu, Finland
      </li>
      <li onClick={() => setLocation('Vaasa, Finland')} className='flex w-fit items-center cursor-pointer text-[#4F4F4F] font-medium hover:text-[#828282] hover:underline hover:underline-offset-2 duration-500'>
        <MdLocationPin className='mr-2' /> Vaasa, Finland
      </li>
    </ul>
  )
}

export default Locations