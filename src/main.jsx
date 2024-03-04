import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Components/Router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#1e1e1e]'>
      <RouterProvider router={myCreatedRouter}>
      </RouterProvider>
    </div>
  </React.StrictMode>
)
