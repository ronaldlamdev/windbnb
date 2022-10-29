import React from 'react'
import Logo from '../assets/images/logo.svg'
import {AiOutlineSearch} from 'react-icons/ai'

const Header = () => {
  return (
    <header className='flex flex-col items-center gap-5'>
      <img src={Logo} alt='logo' className='self-start'/>
      <div className='flex shadow-[0px_1px_6px_0px_rgba(0,0,0,.1)] rounded-2xl justify-center items-center h-[55px] w-[297px]'>
        <div className='w-[138px] text-[#BDBDBD] font-["Mulish"] text-sm text-center'>Location</div>
        <div className='w-[106px] text-[#BDBDBD] font-["Mulish"] text-sm h-full flex justify-center items-center border-x-[1px]'>Add guests</div>
        <div className='w-[53px] flex justify-center items-center text-[#EB5757E5] text-xl'>
          <AiOutlineSearch />
        </div>
      </div>

      {/* Search menu */}
      <div className='absolute'></div>
    </header>
  )
}

export default Header