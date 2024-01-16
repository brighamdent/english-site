import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Pricing} from './pages/Pricing'
import {About} from './pages/About'
import { Navbar } from './components/Navbar'
import StripeContainer from './components/StripeContainer'

function App() {

  return (
    <>
    <Navbar/>  
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/about' element={<About />} />
          <Route path='/payment' element={<StripeContainer/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
