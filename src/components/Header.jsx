import React, {useState} from 'react'
import Logo from '../assets/images/logo.svg'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import {MdLocationPin} from 'react-icons/md'

const Header = () => {

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className='flex flex-col items-center gap-5'>
      <a className='self-start' href='/'>
        <img src={Logo} alt='logo'/>
      </a>
      <div className='flex shadow-[0px_1px_6px_0px_rgba(0,0,0,.1)] rounded-2xl justify-center items-center h-[55px] w-[297px]'>
        <div className='w-[138px] text-[#BDBDBD] font-["Mulish"] text-sm text-center'>Location</div>
        <div className='w-[106px] text-[#BDBDBD] font-["Mulish"] text-sm h-full flex justify-center items-center border-x-[1px]'>Add guests</div>
        <div className='w-[53px] flex justify-center items-center text-[#EB5757E5] text-xl'>
          <AiOutlineSearch />
        </div>
      </div>

      {/* Search menu background */}
      <div className={menu ? 'absolute hidden bottom-0 left-0 w-full h-[20vh] bg-black/60' : 'absolute bottom-0 left-0 w-full h-[20vh] bg-black/60'}></div>
      
      {/* Search menu */}
      <div className='absolute top-0 left-0 w-full h-[80vh] bg-white shadow-md'>
        <div className='flex flex-col items-center h-full'>

          {/* Heading and close icon */}
          <div className='flex w-full justify-between items-center p-5'>
            <h1 className='font-["Mulish"] font-bold'>Edit your search</h1>
            <AiOutlineClose onClick={handleMenu} className='text-[#333333] text-xl' />
          </div>

          <div className='flex flex-col h-full justify-between'>
            <div className='flex flex-col'>
              
              {/* Inputs */}
              <div className='shadow-[0px_1px_6px_0px_rgba(0,0,0,.1)] rounded-2xl w-[351px] h-[113px]'>
                <div className='border-b-[1px]'>
                  <span className='font-["Mulish"] pl-6 text-sm text-[#333333] font-extrabold'>Location</span>
                  <div className='text-[#BDBDBD] font-["Mulish"] pl-6 pb-1'>Select Location</div>
                </div>
                <div className=''>
                  <span className='font-["Mulish"] text-sm pl-6 pt-3 text-[#333333] font-extrabold'>Guests</span>
                  <div className='text-[#BDBDBD] font-["Mulish"] pl-6'>Add Guests</div>
                </div>
              </div>

              {/* Locations */}
              <ul>
                <li>
                  <MdLocationPin /> Helsinki, Finland
                </li>
                <li>
                  <MdLocationPin /> Turku, Finland
                </li>
                <li>
                  <MdLocationPin /> Oulu, Finland
                </li>
                <li>
                  <MdLocationPin /> Vaasa, Finland
                </li>
              </ul>
            </div>

            {/* Search button */}
            <button><AiOutlineSearch /> Search</button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header