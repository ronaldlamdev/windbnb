import React, {useState} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import DataContext from './context/DataContext'
import Data from './assets/data/stays.json'
import LocationContext from './context/LocationContext'

const App = () => {

  const [rooms, setRooms] = useState(Data)
  const [location, setLocation] = useState("Select Location"); 

  return (
    <DataContext.Provider value={{rooms, setRooms}}>
    <LocationContext.Provider value={{location, setLocation}}>
      <Header />
      <Home />
    </LocationContext.Provider>
    </DataContext.Provider>
  )
}

export default App