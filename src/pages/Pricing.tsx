import {Link} from 'react-router-dom'
export function Pricing(){
 const pricingStuctures = [
    {
      plan: 1,
      name:'Base',
      price:'600 MXN',
      classes:'2 Clases grupales de una hora'
    },
    {
      plan: 2,
      name:'Estudiante+',
      price:'900 MXN',
      classes:'2 Clases grupales de 1 hora por semana',
      bonus:'1 Clase privada al mes' 
    },
    {
      plan: 3,
      name:'Estudiante Privado',
      price:'1200 MXN',
      classes:'1 clases de una hora completamente privada',
      bonus:'Un plan de aprendizaje personalizado'
    }
  ]
  return ( 
    <div>
      <h1 className="text-lg lg:text-3xl text-center sm:m-2" >Precios flexibles para cualquier meta de aprendizaje!</h1> 
      <div className="flex flex-col items-center lg:flex-row justify-evenly">
        {pricingStuctures.map((p,index) =>
          <div className="flex flex-col justify-between items-center h-[400px] lg:h-[500px] m-4 w-[300px] text-center rounded-lg p-8
                         bg-white shadow-lg">
            <div className='h-20 border-b border-gray-300 w-full'>
              <h2 className=" text-2xl ">{p.name}</h2>
            </div>
            <h1 className="text-5xl">{p.price}</h1>
            <div>
               <p>{p.classes}</p>
               {p.bonus && <p>{p.bonus}</p>}
            </div>
            <Link 
            className="rounded bg-blue-200 text-2xl p-3 flex justify-center items-center" 
            to= '/payment' state={{data: pricingStuctures[index]}}><button >Seleccionar Plan</button></Link>
          </div>
        )}        
        
      </div>
    </div>
  )
}
