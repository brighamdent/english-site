import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCircleExclamation, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function SignUp() {
  const { signup, createUserDoc} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const email = event.target.email.value;
    const password = event.target.password.value;
    const passwordConfirm = event.target.passwordConfirm.value;
    if (password != passwordConfirm) {
      setLoading(false)
      return setError("Passwords do not match");
    }
    try {
      setError("");
      await signup(email, password)
      await createUserDoc(email)
      navigate("/pricing");
    } catch {
      setError(`Failed to create account`);
    setLoading(false);
    }
    setLoading(false);
  };
  return (
    <div>
      {loading && <div className="fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center">
        <FontAwesomeIcon className='fixed top-1/2 text-6xl' icon={faSpinner} spinPulse /></div> }
      <div className='flex flex-col items-center  pt-12 pb-2 p-4 sm:bg-white rounded-[10px] sm:w-[70vw] sm:shadow-sm text-2xl sm:text-3xl max-w-[500px]'>
      <div className="mb-8">
        <h2 className="text-center mb-14 text-4xl">Registrarse</h2>
      {error && <div className="text-lg flex items-center bg-red-200 text-red-500 border border-red-500 w-full rounded-md p-4 h-16 mb-4">
            <FontAwesomeIcon className="mr-4" icon={faCircleExclamation} />
            <h1>{error}</h1>
            <FontAwesomeIcon className="ml-6 lg:ml-[100px]" onClick={() => setError('')} icon={faXmark} />
          </div>}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <fieldset className="mb-6">
              <label className="block text-left">
                <h1 className='mb-2 text-xl'>Correo Electronico</h1>
                <input className='border-2 border-black/25 rounded-[10px] h-14 p-6'type="email" name="email" required />
              </label>
            </fieldset>
            <fieldset className="mb-6">
              <label className="block text-left">
                <h1 className='mb-2 text-xl'>Contraseña</h1>
                <input className='border-2 border-black/25 rounded-[10px] h-14 p-6' type="password" name="password" required />
              </label>
            </fieldset>
            <fieldset className="mb-6">
              <label className="block text-left">
                <h1 className='mb-2 text-xl'>Confirmar Contraseña</h1>
                <input className='border-2 border-black/25 rounded-[10px] h-14 p-6' type="password" name="passwordConfirm" required />
              </label>
            </fieldset>
          </div>
          <button disabled={loading} className='w-full bg-blue-200 hover:bg-blue-300 rounded-lg h-14'>
            Registrarse
          </button>
        </form>
      </div>
      <div className='mb-2 text-xl'>
        ¿Ya tienes cuenta?
        <Link className='text-blue-600 hover:border-b border-blue-600/20 ' to="/login">Login</Link>
      </div>
    </div>
    </div>
  );
}
