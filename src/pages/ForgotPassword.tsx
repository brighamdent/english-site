import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ForgotPassword() {
  const { resetPassword,currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading,setLoading] = useState(false)
  const [message,setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) =>{
    event.preventDefault()
    setMessage('')
    const email = event.target.email.value;

    try{
      setError('')
      setLoading(true)
    await resetPassword(email) 
      setMessage("Email sent, check your inbox to reset password.")
    } catch{
      setError('Failed to reset password')
    }
    setLoading(false)
  }
  return (
    <div>
      <div>
        <h2 className='text-center mb-4'>Forgot Password</h2>
        {currentUser && currentUser.email}
        {error && <h1>{error}</h1>}
        {message && <h1>{message}</h1>}
        <form onSubmit={handleSubmit}>
          <fieldset className='mb-2'>
            <label >
              Email
              <input type='email' name='email' required/>
            </label>
          </fieldset>
          <button disabled={loading} className='w-100'>Reset Password</button>
        </form>
      </div>
      <div>
        Need an account?
        <Link to='/signup'>Sign Up</Link>
      </div>
    </div>
  )
} 
