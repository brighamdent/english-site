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
      <h1 className="text-4xl text-center m-8" >Precios flexibles para cualquier meta de aprendizaje!</h1> 
      <div className="flex justify-evenly">
        {pricingStuctures.map((p,index) =>
          <div className="flex flex-col justify-between items-center  h-[65vh] w-[25vw] text-center rounded-lg p-8
                         bg-white shadow-lg">
            <h2 className="text-3xl">{p.name}</h2>
            <h1 className="text-6xl">{p.price}</h1>
            <div>
               <p>{p.classes}</p>
               {p.bonus && <p>{p.bonus}</p>}
            </div>
            <Link 
            className="rounded h-[10%] w-[70%] bg-blue-200" 
            to= '/payment' state={{data: pricingStuctures[index]}}>Seleccionar Plan</Link>
          </div>
        )}        
        
      </div>
    </div>
  )
}
