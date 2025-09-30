import { useState } from 'react'
import './App.css'

import { Routes, Route, Navigate } from 'react-router-dom'

import apiKey from './config'

import Nav from './components/Nav'
import Photo from './components/Photo'
import PhotoList from './components/PhotoList'
import Search from './components/Search'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Search />
        <Nav />

        <Routes>
           <Route path="/" element={<Navigate to="/cats" />} />

           <Route path="/cats" element={<PhotoList topic="cats" />} />
            <Route path="/dogs" element={<PhotoList topic="dogs" />} />
            <Route path="/computers" element={<PhotoList topic="computers" />} />

            <Route path="/search/:query" element={<PhotoList />} />
        </Routes>
      </div>
    </>
  )
}

export default App
