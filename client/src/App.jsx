import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/echolounge',
      element: <LocationEvents index={1} />
    },
    {
      path: '/houseofblues',
      element: <LocationEvents index={2} />
    },
    {
      path: '/pavilion',
      element: <LocationEvents index={3} />
    }
  ])

  return (
    <div>
      <header>
        <h1>UnityGrid Plaza</h1>
        <Link to="/" role="button">Home</Link>
      </header>
      
      <main>
        {element}
      </main>
    </div>
  )
}

export default App