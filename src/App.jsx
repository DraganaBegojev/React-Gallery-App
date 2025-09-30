import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import apiKey from './config'

import Nav from './components/Nav'
import Photo from './components/Photo'
import PhotoList from './components/PhotoList'
import Search from './components/Search'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Search />
        <Nav />
      </div>
    </>
  )
}

export default App
