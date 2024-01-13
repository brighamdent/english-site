import { Link } from "react-router-dom"

export function Navbar() {
  return( 
    <div className='sticky top-0'>
      <div className="flex items-center justify-evenly bg-white h-12 px-4 drop-shadow-sm text-2xl mb-10">
        <Link to='/'>Inicio</Link >
        <Link to='/pricing'>Costo</Link>
        <Link to='/about'>Quiénes Somos</Link>
      </div>
    </div>
  )
} 
