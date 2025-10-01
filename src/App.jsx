import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import apiKey from './config'

import Nav from './components/Nav'
import PhotoList from './components/PhotoList'
import Search from './components/Search'


function App() {
  const [photos, setPhotos] = useState({
    cats: [],
    dogs: [],
    computers: [],
    search: []
  })

  const fetchData = async (query, topic = 'search') => {
    try {
      const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&per_page=24`)

      const data = await response.json()
      setPhotos(prev => ({
        ...prev,
        [topic]: data.hits
      }));
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  useEffect(() => {
    fetchData('cats', 'cats')
    fetchData('dogs', 'dogs')
    fetchData('computers', 'computers')
  }, [])

  return (
    <>
      <div className="container">
        <Search fetchData={fetchData}/>
        <Nav />

        <Routes>
           <Route path="/" element={<Navigate to="/cats" />} />

           <Route path="/cats" element={<PhotoList photos={photos.cats} topic="cats" />} />
            <Route path="/dogs" element={<PhotoList photos={photos.dogs} topic="dogs" />} />
            <Route path="/computers" element={<PhotoList photos={photos.computers} topic="computers" />} />

            <Route path="/search/:query" element={<PhotoList photos={photos.search} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
