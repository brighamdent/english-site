import React,{useState} from 'react'
import {useAuth} from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [error,setError] = useState('')
  const {currentUser, logout} = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () =>{

    setError('')
    try{
      await logout()
      navigate('/login') 
    }catch{
      setError('Failed to log out')
    }
  }
  return (
    <div>
      <h1>Dashboard</h1>
      {error && <h1>{error}</h1>}
      <strong>Email:</strong> {currentUser && currentUser.email}
      <Link to='/update-profile'>Update Profile</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
} 
