import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login,currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) =>{
    event.preventDefault()

    const email = event.target.email.value;
    const password = event.target.password.value;   

    try{
      setError('')
      setLoading(true)
    await login(email,password)
      navigate('/dashboard')
    } catch{
      setError(`Failed to log in`)
    }
    setLoading(false)
  }
  return (
    <div>
      <div>
        <h2 className='text-center mb-4'>Login</h2>
        {currentUser && currentUser.email}
        {error && <h1>{error}</h1>}
        <form onSubmit={handleSubmit}>
          <fieldset className='mb-2'>
            <label >
              Email
              <input type='email' name='email' required/>
            </label>
          </fieldset>
          <fieldset className='mb-2'>
            <label >
              Password
              <input type='password' name='password' required/>
            </label>
          </fieldset>
          <button disabled={loading} className='w-100'>Log In</button>
        </form>
      </div>
      <div>
        Need an account?
        <Link to='/signup'>Sign Up</Link>
      </div>
      <div>
        <Link to='/forgot-password'>Forgot Password?</Link>
      </div>
    </div>
  )
} 
