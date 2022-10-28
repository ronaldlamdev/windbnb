import React from 'react'
import Logo from '../assets/images/logo.svg'
import {AiOutlineSearch} from 'react-icons/ai'

const Header = () => {
  return (
    <header>
      <img src={Logo} alt='logo' />
      <div>
        <div>Location</div>
        <div>Add guests</div>
        <div>
          <AiOutlineSearch />
        </div>
      </div>
    </header>
  )
}

export default Header