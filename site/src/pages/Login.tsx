import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCircleExclamation, faXmark} from '@fortawesome/free-solid-svg-icons';
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
   setError('El nombre de usuario y la contraseña no coinciden.')
    }
    setLoading(false)
  }
  return (
    <div>
      {loading && <div className="fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center">
        <FontAwesomeIcon className='fixed top-1/2 text-6xl' icon={faSpinner} spinPulse /></div> }
      <div className='flex flex-col items-center pt-12 pb-12 p-4 sm:bg-white rounded-[10px] sm:w-[70vw] sm:shadow-sm text-2xl sm:text-3xl max-w-[500px]'>
      <div className='mb-8'>
        <h2 className='text-center mb-14 text-4xl '>Iniciar Sesión</h2>
      {error && <div className="text-sm sm:text-lg flex items-center bg-red-200 text-red-500 border border-red-500 w-full rounded-md p-4 h-16 mb-4 max-w-[330px] sm:max-w-[400px]">
            <FontAwesomeIcon className="mr-4" icon={faCircleExclamation} />
            <h1>{error}</h1>
            <FontAwesomeIcon className="ml-6 lg:ml-[10px]" onClick={() => setError('')} icon={faXmark} />
          </div>}
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
          <button disabled={loading} className='w-full bg-blue-200 hover:bg-blue-300 rounded-lg h-14'>Iniciar Sesión</button>
        </form>
      </div>
      <div className='mb-2 text-xl'>
        <strong>¿No Tienes Cuenta? </strong>
        <Link className='text-blue-600 hover:border-b border-blue-600/20' to='/signup'>Registrarse</Link>
      </div>
      <div className='text-lg text-blue-600 hover:border-b border-blue-600/20'>
        <Link to='/forgot-password'>¿Olvidaste tu contraseña?</Link>
      </div>
    </div>
    </div>
  )
} 
