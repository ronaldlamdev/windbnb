import React, {useState} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import DataContext from './context/DataContext';
import LocationContext from './context/LocationContext';
import GuestsContext from './context/GuestsContext';
import { stays } from './assets/data/Rooms';

const App = () => {

  const [rooms, setRooms] = useState(stays);
  const [location, setLocation] = useState("Select Location");
  const [guests, setGuests] = useState("Add guests") ;

  return (
    <DataContext.Provider value={{rooms, setRooms}}>
    <LocationContext.Provider value={{location, setLocation}}>
    <GuestsContext.Provider value={{guests, setGuests}}>
      <Header />
      <Home />
    </GuestsContext.Provider>
    </LocationContext.Provider>
    </DataContext.Provider>
  )
}

export default App