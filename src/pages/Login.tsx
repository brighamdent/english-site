import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { login,currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (event) =>{
    event.preventDefault()
      setLoading(true)

    const email = event.target.email.value;
    const password = event.target.password.value;   

    try{
      setError('')
    await login(email,password)
      navigate('/account')
    } catch{
      setError(`Failed to log in`)
    }
    setLoading(false)
  }
  return (
    <div>
      {loading ? <div className="bg-grey-200 w-full h-full flex items-center justify-center"><FontAwesomeIcon className='fixed top-1/2 text-6xl' icon={faSpinner} spinPulse /></div> :
      <div className='flex flex-col items-center pt-12 pb-12 p-4 sm:bg-white rounded-[10px] sm:w-[70vw] sm:shadow-sm text-2xl sm:text-3xl max-w-[500px]'>
      <div className='mb-8'>
        <h2 className='text-center mb-14 text-4xl '>Iniciar Sesión</h2>
        {error && <h1>{error}</h1>}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <fieldset className='mb-6'>
              <label className='block text-left'>
                <h1 className='mb-2 text-xl'>Correo Electronico</h1>
                <input className=' border-2 border-black/25 rounded-[10px] h-14 p-6' type='email' name='email' required/>
              </label>
            </fieldset>
            <fieldset className='mb-6'>
              <label >
                <h1 className='mb-2 text-xl'>Contraseña</h1>
                <input className='border-2 border-black/25 rounded-[10px] h-14 p-6' type='password' name='password' required/>
              </label>
            </fieldset>
          </div>
          <button disabled={loading} className='w-full bg-blue-200 rounded-lg h-14'>Iniciar Sesión</button>
        </form>
      </div>
      <div className='mb-2 text-xl'>
        <strong>¿No Tienes Cuenta? </strong>
        <Link className='text-blue-600 ' to='/signup'>Registrarse</Link>
      </div>
      <div className='text-lg text-blue-600'>
        <Link to='/forgot-password'>¿Olvidaste tu contraseña?</Link>
      </div>
    </div>}
    </div>
  )
} 
