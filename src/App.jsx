import { useState, useEffect, useCallback } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import apiKey from './config'

import Nav from './components/Nav'
import PhotoList from './components/PhotoList'
import Search from './components/Search'
import NotFound from './components/NotFound'


function App() {
  // State to hold photos for different topics
  const [photos, setPhotos] = useState({
    cats: [],
    dogs: [],
    computers: [],
    search: []
  })

  // loding state 
  const [loading, setLoading] = useState(false);


  const fetchData = useCallback (async (query, topic = 'search') => {
    // fetch data from pixabay api
    setLoading(true);
    try {
        const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&per_page=24`)

        const data = await response.json()
        setPhotos(prev => ({
          ...prev,
          [topic]: data.hits
        }));
      } catch (error) {
      console.error('Error fetching data:', error)
      } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    // Fetch initial data for default topics
    fetchData('cats', 'cats')
    fetchData('dogs', 'dogs')
    fetchData('computers', 'computers')
  }, [fetchData])

  return (
    <>
      <div className="container">
        <Search fetchData={fetchData}/>
        <Nav />

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        )}

        <Routes>
           <Route path="/" element={<Navigate to="/cats" />} />

           <Route path="/cats" element={<PhotoList photos={photos.cats} topic="cats" />} />
            <Route path="/dogs" element={<PhotoList photos={photos.dogs} topic="dogs" />} />
            <Route path="/computers" element={<PhotoList photos={photos.computers} topic="computers" />} />

            <Route path="/search/:query" 
            element={<PhotoList photos={photos.search} fetchData={fetchData} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
