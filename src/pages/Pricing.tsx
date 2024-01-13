export function Pricing(){
 const pricingStuctures = [
    {
      name:'Base',
      price:'600 MXN',
      classes:'2 Clases grupales de una hora'
    },
    {
      name:'Estudiante+',
      price:'900 MXN',
      classes:'2 Clases grupales de 1 hora por semana',
      bonus:'1 Clase privada al mes' 
    },
    {
      name:'Estudiante Privado',
      price:'1200 MXN',
      classes:'1 clases de una hora completamente privada',
      bonus:'Un plan de aprendizaje personalizado'
    }
  ]
  return ( 
    <div>
      <h1 className="text-4xl text-center m-8" >Precios flexibles por cualquier meta de aprendizaje!</h1> 
      <div className="flex justify-evenly">
        {pricingStuctures.map(p =>
          <div className="flex flex-col justify-between items-center  h-[65vh] w-[25vw] text-center rounded-lg p-8
                         bg-white shadow-lg">
            <h2 className="text-3xl">{p.name}</h2>
            <h1 className="text-6xl">{p.price}</h1>
            <div>
               <p>{p.classes}</p>
               {p.bonus && <p>{p.bonus}</p>}
            </div>
            <button className="rounded h-[10%] w-[70%] bg-blue-200">Seleccionar Plan</button>
          </div>
        )}        
        
      </div>
    </div>
  )
}
