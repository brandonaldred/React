import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world</div>
  },
  {
    path: "/about",
    element: <div>this is about</div>
  }
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
