import React, {useState} from 'react'
import {FiPlusSquare, FiMinusSquare} from 'react-icons/fi'

const Guests = () => {

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  
  const PlusAdultCount = () => {
    if (adults >= 0) {
      setAdults(adults + 1);
    };
  };

  const MinusAdultCount = () => {
    if (adults > 0) {
      setAdults(adults - 1);
    };
  };

  const PlusChildrenCount = () => {
    if (children >= 0) {
      setChildren(children + 1);
    };
  };

  const MinusChildrenCount = () => {
    if (children > 0) {
      setChildren(children - 1);
    };
  };

  return (
    <div className='px-6 py-9 font-["Mulish"]'>

      {/* Adults */}
      <div className='mb-[3.25rem]'>
        <h1 className='text-[#333] font-bold'>Adults</h1>
        <span className='text-[#BDBDBD]'>Ages 13 or above</span>
        <div className='flex items-center mt-2'>
          <button onClick={MinusAdultCount}><FiMinusSquare className='w-6 h-6 hover:text-[#EB5757E5] duration-500' /></button>
          <span className='px-4'>{adults}</span>
          <button onClick={PlusAdultCount}><FiPlusSquare className='w-6 h-6 hover:text-[#EB5757E5] duration-500' /></button>
        </div>
      </div>

      {/* Children */}
      <div>
        <h1 className='text-[#333] font-bold'>Children</h1>
        <span className='text-[#BDBDBD]'>Ages 2 - 12</span>
        <div className='flex items-center mt-2'>
          <button onClick={MinusChildrenCount}><FiMinusSquare className='w-6 h-6 hover:text-[#EB5757E5] duration-500' /></button>
          <span className='px-4'>{children}</span>
          <button onClick={PlusChildrenCount}><FiPlusSquare className='w-6 h-6 hover:text-[#EB5757E5] duration-500' /></button>
        </div>
      </div>
    </div>
  )
}

export default Guests