import React from 'react'
import Logo from '../assets/images/logo.svg'
import {AiOutlineSearch} from 'react-icons/ai'

const Header = () => {
  return (
    <header>
      <img src={Logo} alt='logo' />
      <div className='flex rounded-md justify-center items-center shadow-[0_1_6_0_#0000001]'>
        <div>Location</div>
        <div>Add guests</div>
        <div>
          <AiOutlineSearch />
        </div>
      </div>

      {/* Search menu */}
      <div className='absolute'></div>
    </header>
  )
}

export default Header