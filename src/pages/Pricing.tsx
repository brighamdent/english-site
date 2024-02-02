    import { PlanTiles } from '../components/PlanTiles'
export function Pricing(){
  return ( 
    <div>
      <h1 className="text-lg lg:text-3xl text-center sm:m-2" >Precios flexibles para cualquier meta de aprendizaje!</h1> 
     <PlanTiles pricingPage={true}/> 
    </div>
  )
}
