import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { query } from 'firebase/database'

export default function SignUp() {
  const { signup,currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) =>{
    event.preventDefault()

    const email = event.target.email.value;
    const password = event.target.password.value;   
    const passwordConfirm = event.target.passwordConfirm.value;
    if(password != passwordConfirm){
      return setError('Passwords do not match')
    }
    try{
      setError('')
      setLoading(true)
      await signup(email,password)
     navigate('/')
    } catch{
      setError(`Failed to create account`)
    }
    setLoading(false)
  }
  return (
    <div>
      <div>
        <h2 className='text-center mb-4'>Sign Up</h2>
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
          <fieldset className='mb-2'>
            <label>
              Password Confirmation
              <input type='passwordConfirm' name='passwordConfirm' required/>
            </label>
          </fieldset>
          <button disabled={loading} className='w-100'>Sign Up</button>
        </form>
      </div>
      <div>
        Already have an account?
        <Link to='/login'>Login</Link>
      </div>
    </div>
  )
} 
