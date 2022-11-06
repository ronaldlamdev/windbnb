import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import DataContext from './context/DataContext'
import { data } from './context/DataContext'

const App = () => {
  return (
    <DataContext.Provider value={data}>
      <div className='py-5'>
        <Header />
        <Home />
      </div>
    </DataContext.Provider>
  )
}

export default App