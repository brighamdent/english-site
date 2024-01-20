import React from 'react'
import StripeContainer from '../components/StripeContainer'
import { useLocation } from 'react-router-dom';
  
export function Payment(props) {
  const location = useLocation()
  console.log(props + 'props')
  const pricingStructure = location.state?.data;
  console.log(pricingStructure)
  return (
  <div className='flex justify-around'>
    
    <div className="flex flex-col justify-between items-center  h-[65vh] w-[25vw] text-center rounded-lg p-8 bg-white shadow-lg">
      <h2 className="text-3xl">{pricingStructure.name}</h2>
      <h1 className="text-6xl">{pricingStructure.price}</h1>
      <div>
        <p>{pricingStructure.classes}</p>
        {pricingStructure.bonus && <p>{pricingStructure.bonus}</p>}
     </div>
     </div>
      <div className='w-[70%]'>
        <StripeContainer plan={pricingStructure.plan}/>  
      </div>
  </div>
  )
}
