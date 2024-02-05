import graphic from '../assets/graphic.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
export function Home(){
  const { subscribed } = useAuth()
  return(
    <div>
      <div className="text-center items-center flex-col-reverse flex xl:flex-row mt-[5%] sm:m-5 ">
      <div className=" flex items-center flex-col m-4 ">
        <h1 className="text-3xl sm:text-4xl text-center">¡Empieza a hablar el ingles con confianza! </h1>
        <div className="hidden sm:block sm:flex justify-between w-[80%] m-5 text-3xl text-blue-200">
          <h1>LEER</h1>
          <h1>HABLAR</h1>
          <h1>ESCRIBIR</h1>
        </div>
        <Link to={subscribed ? '/dashboard' : '/pricing' } className=" rounded-lg bg-blue-200 text-3xl p-5 m-10" >EMPIEZA YA!</Link>
      </div>
      <img className=' w-[60%] md:w-[40%] xl:w-[35%]'src={graphic}></img>
     </div>
      <div className='bg-white w-full h-24'>
        
      </div>

    </div>
  )
}
