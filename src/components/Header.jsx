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
    <header className='header'>
      <a className='self-start lg:self-center' href='/'>
        <img className='lg:w-32' src={Logo} alt='logo'/>
      </a>
      <div onClick={handleMenu} className='header-inputs-container'>
        <div className='header-location-input'>{location}</div>
        <div className='header-guests-input'>{guests}</div>
        <div className='header-search-button'>
          <AiOutlineSearch />
        </div>
      </div>

      {/* Search menu background */}
      <div onClick={handleMenu} className={menu ? 'search-menu-bg-active' : 'search-menu-bg-hidden'}></div>
      
      {/* Search menu */}
      <div className={menu ? 'search-menu-active' : 'search-menu-hidden'}>
        <div className='flex flex-col items-center h-full'>

          {/* Heading and close icon */}
          <div className='flex w-full justify-between md:justify-end items-center p-5'>
            <h1 className='font-["Mulish"] font-bold md:hidden'>Edit your search</h1>
            <AiOutlineClose onClick={handleMenu} className='search-menu-close' />
          </div>

          <div className='flex flex-col h-full justify-between'>
            <div className='flex flex-col'>
              
              {/* Inputs */}
              <div className='flex flex-col md:flex-row'>

                {/* Location Input */}
                <div onClick={() => setList(<Locations />)} className='search-menu-location-input-container group'>
                  <span className='search-menu-location-input-heading'>Location</span>
                  <div className='search-menu-location-input-selection'>{location}</div>
                </div>

                {/* Guests Input */}
                <div onClick={() => setList(<Guests />)} className='search-menu-guests-input-container group'>
                  <span className='search-menu-guests-input-heading'>Guests</span>
                  <div className='search-menu-guests-input-selection'>{guests}</div>
                </div>

                <div className='search-menu-search-button-container'>
                  <button onClick={handleSubmit} className='search-menu-search-button'><AiOutlineSearch className='text-xl'/> Search</button>
                </div>
              </div>

              {/* Locations or Guests */}
              {list}
            </div>

            {/* Search button */}
            <button onClick={handleSubmit} className='search-menu-search-button-mobile'><AiOutlineSearch className='text-xl'/> Search</button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header