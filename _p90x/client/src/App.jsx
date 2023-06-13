import { useState } from 'react'
import './App.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './assets/pages/Home'
import Workout from './assets/pages/Workout'

function App() {
  const user = {
    name: 'Camden',
    phase: 1,
    day: 3,
    avatar: `/src/assets/images/camden.jpg`,
    currentWorkout: {
      type: 'strength',
      workout: 'chest & arms'
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home user={user}/>
    },
    {
      path: "/workout",
      element: <div>About</div>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
