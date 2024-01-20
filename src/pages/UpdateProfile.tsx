import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { query } from 'firebase/database'

export default function UpdateProfile() {
  const { currentUser, updateEmail, updatePassword} = useAuth()
  const [error, setError] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (event) =>{
    event.preventDefault()
    setLoading(true)
    setError('')
    const email = event.target.email.value;
    const password = event.target.password.value;   
    const passwordConfirm = event.target.passwordConfirm.value;
    if(password != passwordConfirm){
      return setError('Passwords do not match')
    }

    let promises = []
    if(email != currentUser.email){
      promises.push(updateEmail(email))
      console.log(email)
    }
    if(password != currentUser.password){
      promises.push(updatePassword(password))
      console.log(password)
    }

    Promise.all(promises).then(() => {
      navigate('/dashboard')
    }).catch(() => {
      console.error('Firebase Authentication Error:', error);
    setError('Failed to Update')
    }).finally(() => {
    setLoading(false)
    })
      
  }

  return (
    <div>
      <div>
        <h2 className='text-center mb-4'>Update Profile</h2>
        {error && <h1>{error}</h1>}
        <form onSubmit={handleSubmit}>
          <fieldset className='mb-2'>
            <label >
              Email
              <input type='email' name='email' defaultValue={currentUser.email}/>
            </label>
          </fieldset>
          <fieldset className='mb-2'>
            <label >
              Password
              <input type='password' name='password' placeholder='Leave blank to keep the same'/>
            </label>
          </fieldset>
          <fieldset className='mb-2'>
            <label>
              Password Confirmation
              <input type='passwordConfirm' name='passwordConfirm' placeholder='Leave blank to keep the same'/>
            </label>
          </fieldset>
          <button disabled={loading} className='w-100'>Update</button>
        </form>
      </div>
      <div>
        <Link to='/login'>Cancel</Link>
      </div>
    </div>
  )
} 
