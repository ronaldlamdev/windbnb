import React, {useContext, useState} from 'react';
import Logo from '../assets/images/logo.svg';
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai';
import Locations from './Locations';
import Guests from './Guests';
import DataContext from '../context/DataContext';
import LocationContext from '../context/LocationContext';
import GuestsContext from '../context/GuestsContext';
import { data } from '../assets/data/stays';

const Header = () => {

  const {setStays} = useContext(DataContext);
  const {location} = useContext(LocationContext);
  const {guests} = useContext(GuestsContext);
  const [menu, setMenu] = useState(false);
  const [list, setList] = useState(<Locations />);

  const handleSubmit = () => {
    setStays(
      data.filter((stay) => {
        return stay.city === location && stay.maxGuests <= guests
      })
    )
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
        <div className={(location === "Select Location") ? 'header-location-input' : 'header-location-input-selected'}>{location} 
        {(location === "Helsinki" || location === "Turku" || location === "Vaasa" || location === "Oulu") ? ", Finland" : null }</div>
        <div className={(guests === "Add guests") ? 'header-guests-input' : 'header-guests-input-selected'}>{guests}</div>
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
                  <div className={(location === "Select location") ? 'search-menu-location-input-selection' : 'search-menu-location-input-selected'}>{location} 
                  {(location === "Helsinki" || location === "Turku" || location === "Vaasa" || location === "Oulu") ? ", Finland" : null }</div>
                </div>

                {/* Guests Input */}
                <div onClick={() => setList(<Guests />)} className='search-menu-guests-input-container group'>
                  <span className='search-menu-guests-input-heading'>Guests</span>
                  <div className={(guests === "Add guests") ? 'search-menu-guests-input-selection' : 'search-menu-guests-input-selected'}>{guests}</div>
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