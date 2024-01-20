import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Pricing} from './pages/Pricing'
import {About} from './pages/About'
import { Navbar } from './components/Navbar'
import {Payment} from './pages/Payment'
import {SignIn} from './pages/SignIn'
import StripeContainer from './components/StripeContainer'
import { AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import PrivateRoutes from './components/PrivateRoutes'
import ForgotPassword from './pages/ForgotPassword'
import UpdateProfile from './pages/UpdateProfile'

function App() {

  return (
    <>
    <AuthProvider>
    <Navbar/>  
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/about' element={<About />} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/signup' element={<SignIn/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/dashboard" element={<PrivateRoutes><Dashboard/></PrivateRoutes>}/>
          <Route path="/update-profile" element={<PrivateRoutes><UpdateProfile/></PrivateRoutes>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
        </Routes>
      </div>
      </AuthProvider>
    </>
  )
}

export default App
