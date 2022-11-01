import React, {useState} from 'react'
import Logo from '../assets/images/logo.svg'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import Locations from './Locations'
import Guests from './Guests'

const Header = () => {

  const [menu, setMenu] = useState(false);
  const [list, setList] = useState(<Locations />);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className='flex flex-col items-center gap-5 lg:justify-between lg:flex-row lg:px-24'>
      <a className='self-start lg:self-center' href='/'>
        <img src={Logo} alt='logo'/>
      </a>
      <div onClick={handleMenu} className='flex shadow-[0px_1px_6px_0px_rgba(0,0,0,.1)] rounded-2xl justify-center items-center h-[55px] w-[297px] min-[481px]:w-[460px] md:w-[680px] lg:w-[297px]'>
        <div className='w-[138px] min-[481px]:w-[200px] md:w-[280px] lg:w-[138px] text-[#BDBDBD] font-["Mulish"] text-sm text-center'>Location</div>
        <div className='w-[106px] min-[481px]:w-[200px] md:w-[280px] lg:w-[106px] text-[#BDBDBD] font-["Mulish"] text-sm h-full flex justify-center items-center border-x-[1px]'>Add guests</div>
        <div className='w-[53px] min-[481px]:w-[60px] md:w-[120px] lg:w-[53px] flex justify-center items-center text-[#EB5757E5] text-xl'>
          <AiOutlineSearch />
        </div>
      </div>

      {/* Search menu background */}
      <div className={menu ? 'absolute bottom-0 left-0 w-full h-[20vh] bg-black/60' : 'absolute hidden bottom-0 left-0 w-full h-[20vh] bg-black/60'}></div>
      
      {/* Search menu */}
      <div className={menu ? 'absolute top-0 left-0 w-full h-[80vh] bg-white shadow-md' : 'absolute top-[-100%] duration-500 left-0 w-full h-[80vh] bg-white shadow-md'}>
        <div className='flex flex-col items-center h-full'>

          {/* Heading and close icon */}
          <div className='flex w-full justify-between items-center p-5'>
            <h1 className='font-["Mulish"] font-bold'>Edit your search</h1>
            <AiOutlineClose onClick={handleMenu} className='text-[#333333] text-xl hover:opacity-70 duration-500 cursor-pointer' />
          </div>

          <div className='flex flex-col h-full justify-between'>
            <div className='flex flex-col'>
              
              {/* Inputs */}
              <div className='shadow-[0px_1px_6px_0px_rgba(0,0,0,.1)] rounded-2xl w-[351px] h-[112px]'>

                {/* Location Input */}
                <div onClick={() => setList(<Locations />)} className='border-b-[1px] h-[56px] cursor-pointer'>
                  <span className='font-["Mulish"] pl-6 text-sm text-[#333333] font-extrabold'>Location</span>
                  <div className='text-[#BDBDBD] font-["Mulish"] pl-6 pb-1'>Select Location</div>
                </div>

                {/* Guests Input */}
                <div onClick={() => setList(<Guests />)} className='h-[56px] cursor-pointer'>
                  <span className='font-["Mulish"] text-sm pl-6 text-[#333333] font-extrabold'>Guests</span>
                  <div className='text-[#BDBDBD] font-["Mulish"] pl-6 pb-1'>Add Guests</div>
                </div>
              </div>

              {/* Locations or Guests */}
              {list}
            </div>

            {/* Search button */}
            <button className='flex font-medium justify-center rounded-2xl gap-1 mb-6 text-white self-center bg-[#EB5757E5] items-center w-[126px] hover:opacity-70 duration-500 h-12'><AiOutlineSearch className='text-xl'/> Search</button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header