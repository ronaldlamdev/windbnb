import React, {useContext, useState} from 'react';
import Logo from '../assets/images/logo.svg';
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai';
import Locations from './Locations';
import Guests from './Guests';
import DataContext from '../context/DataContext';
import LocationContext from '../context/LocationContext';
import GuestsContext from '../context/GuestsContext';

const Header = () => {

  const {rooms, setRooms} = useContext(DataContext);
  const {location} = useContext(LocationContext);
  const {guests} = useContext(GuestsContext);
  const [menu, setMenu] = useState(false);
  const [list, setList] = useState(<Locations />);

  const handleSubmit = () => {
    setMenu(!menu);
  }

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className='flex flex-col items-center gap-5 px-3 pt-5 lg:justify-between lg:flex-row lg:px-24 xl:px-22 2xl:px-32 min-[1600px]:px-44'>
      <a className='self-start lg:self-center' href='/'>
        <img className='lg:w-32' src={Logo} alt='logo'/>
      </a>
      <div onClick={handleMenu} className='flex shadow-[0px_1px_6px_0px_rgba(0,0,0,.1)] rounded-2xl justify-center items-center h-[55px] w-[297px] min-[481px]:w-[460px] md:w-[680px] lg:w-[297px] xl:w-[400px] cursor-pointer'>
        <div className='w-[138px] min-[481px]:w-[200px] md:w-[280px] lg:w-[138px] xl:w-[200px] text-[#BDBDBD] lg:text-[1.1rem] font-["Mulish"] text-sm text-center'>Location</div>
        <div className='w-[106px] min-[481px]:w-[200px] md:w-[280px] lg:w-[106px] xl:w-[140px] text-[#BDBDBD] lg:text-[1.1rem] font-["Mulish"] text-sm h-full flex justify-center items-center border-x-[1px]'>Add guests</div>
        <div className='w-[53px] min-[481px]:w-[60px] md:w-[120px] lg:w-[53px] xl:w-[60px] flex justify-center items-center text-[#EB5757E5] text-xl lg:text-2xl'>
          <AiOutlineSearch />
        </div>
      </div>

      {/* Search menu background */}
      <div onClick={handleMenu} className={menu ? 'absolute bottom-0 left-0 w-full h-[20vh] md:h-[50vh] bg-black/60' : 'absolute hidden bottom-0 left-0 w-full h-[20vh] bg-black/60'}></div>
      
      {/* Search menu */}
      <div className={menu ? 'absolute top-0 left-0 w-full h-[80vh] md:h-[50vh] bg-white shadow-md' : 'absolute top-[-100%] duration-500 left-0 w-full h-[80vh] bg-white shadow-md'}>
        <div className='flex flex-col items-center h-full'>

          {/* Heading and close icon */}
          <div className='flex w-full justify-between md:justify-end items-center p-5'>
            <h1 className='font-["Mulish"] font-bold md:hidden'>Edit your search</h1>
            <AiOutlineClose onClick={handleMenu} className='text-[#333333] text-xl hover:opacity-70 duration-500 cursor-pointer' />
          </div>

          <div className='flex flex-col h-full justify-between'>
            <div className='flex flex-col'>
              
              {/* Inputs */}
              <div className='flex flex-col md:flex-row'>

                {/* Location Input */}
                <div onClick={() => setList(<Locations />)} className='border-b-[1px] h-[56px] cursor-pointer w-[351px] min-[481px]:w-[440px] min-[700px]:w-[660px] md:w-[200px] lg:w-[300px] xl:w-[420px] shadow-[0px_-1px_6px_0px_rgba(0,0,0,.1)] md:shadow-[0px_1px_6px_0px_rgba(0,0,0,.1)] rounded-t-2xl md:rounded-bl-2xl md:rounded-tr-none md:border-b-0 md:border-r-[1px] duration-500 group hover:bg-[#EB5757E5]'>
                  <span className='font-["Mulish"] pl-6 text-sm text-[#333333] group-hover:text-white font-extrabold'>Location</span>
                  <div className='text-[#BDBDBD] group-hover:text-white font-["Mulish"] pl-6 pb-1'>{location}</div>
                </div>

                {/* Guests Input */}
                <div onClick={() => setList(<Guests />)} className='h-[56px] cursor-pointer w-[351px] min-[481px]:w-[440px] min-[700px]:w-[660px] md:w-[200px] lg:w-[300px] xl:w-[420px] shadow-[0px_1px_6px_0px_rgba(0,0,0,.1)] rounded-b-2xl md:rounded-bl-none md:rounded-br-none duration-500 group hover:bg-[#EB5757E5]'>
                  <span className='font-["Mulish"] text-sm pl-6 text-[#333333] group-hover:text-white font-extrabold'>Guests</span>
                  <div className='text-[#BDBDBD] font-["Mulish"] group-hover:text-white pl-6 pb-1'>{guests}</div>
                </div>

                <div className='hidden md:block w-[200px] xl:w-[420px] h-[56px] shadow-[0px_1px_6px_0px_rgba(0,0,0,.1)] border-l-[1px] rounded-r-2xl'>
                  <button onClick={handleSubmit} className='flex font-medium justify-center mx-auto rounded-2xl gap-1 mb-6 text-white bg-[#EB5757E5] items-center w-[126px] hover:opacity-70 duration-500 h-[56px]'><AiOutlineSearch className='text-xl'/> Search</button>
                </div>
              </div>

              {/* Locations or Guests */}
              {list}
            </div>

            {/* Search button */}
            <button onClick={handleSubmit} className='flex md:hidden font-medium justify-center rounded-2xl gap-1 mb-6 text-white self-center bg-[#EB5757E5] items-center w-[126px] hover:opacity-70 duration-500 h-12'><AiOutlineSearch className='text-xl'/> Search</button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header