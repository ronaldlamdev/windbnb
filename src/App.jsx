import React, {useState} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import DataContext from './context/DataContext'
import Data from './assets/data/stays.json'

const App = () => {

  const [rooms, setRooms] = useState(Data)

  return (
    <DataContext.Provider value={{rooms, setRooms}}>
      <Header />
      <Home />
    </DataContext.Provider>
  )
}

export default App