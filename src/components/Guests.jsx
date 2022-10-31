import React, {useState} from 'react'
import {FiPlusSquare, FiMinusSquare} from 'react-icons/fi'

const Guests = () => {

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  return (
    <div className='px-6 py-9'>

      {/* Adults */}
      <div>
        <h1>Adults</h1>
        <span>Ages 13 or above</span>
        <div>
          <button><FiMinusSquare /></button>
          <span>{adults}</span>
          <button><FiPlusSquare /></button>
        </div>
      </div>

      {/* Children */}
      <div>
        <h1>Children</h1>
        <span>Ages 2 - 12</span>
        <div>
          <button><FiMinusSquare /></button>
          <span>{children}</span>
          <button><FiPlusSquare /></button>
        </div>
      </div>
    </div>
  )
}

export default Guests