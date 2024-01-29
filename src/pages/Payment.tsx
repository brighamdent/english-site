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
      <div className="flex justify-around bg-white p-4 rounded-lg">
      <div className="w-[70%] p-8">
          <h1 className="text-3xl text-center mb-12">Finaliza tu inscripcion!</h1>
        <StripeContainer plan={pricingStructure.plan} />
      </div>
      <div className="flex flex-col justify-between items-center  h-[65vh] w-[25vw] text-center p-8 border-l border-gray-300">
        <h2 className="text-3xl">{pricingStructure.name}</h2>
        <h1 className="text-6xl">{pricingStructure.price}</h1>
        <div>
          <p>{pricingStructure.classes}</p>
          {pricingStructure.bonus && <p>{pricingStructure.bonus}</p>}
        </div>
      </div>
    </div></div>
  );
}
