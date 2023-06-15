import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Sidebar from './components/Sidebar'
import All from './Routes/All'
import Size from './Routes/Size'
import Icon from './Routes/Icon'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className="col-auto">
          <Sidebar />
        </div>
        <div className="">
          <Routes>
            <Route path='/' element={<All />} />
            <Route path='/size' element={<Size />} />
            <Route path='/icon' element={<Icon />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
