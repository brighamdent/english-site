import React from "react";
import StripeContainer from "../components/StripeContainer";
import { useLocation } from "react-router-dom";

export function Payment(props) {
  const location = useLocation();
  console.log(props + "props");
  const pricingStructure = location.state?.data;
  console.log(pricingStructure);
  
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-around items-center sm:bg-white p-4 rounded-lg">
        <div className="flex flex-col justify-between items-center  sm:h-[450px] sm:w-[300px] text-center sm:p-8 sm:border-r border-gray-300">
        <h2 className="text-3xl">{pricingStructure.name}</h2>
        <h1 className="text-6xl">{pricingStructure.price}</h1>
        <div className="hidden sm:block">
          <p>{pricingStructure.classes}</p>
          {pricingStructure.bonus && <p>{pricingStructure.bonus}</p>}
        </div>
      </div>
      <div className="sm:w-[70%] ">
          <h1 className="hidden sm:block text-3xl text-center mb-12">Finaliza tu inscripcion!</h1>
        <StripeContainer plan={pricingStructure.plan} />
      </div>
      
    </div></div>
  );
}
