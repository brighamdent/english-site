import { useState } from "react";
import StripeContainer from "../components/StripeContainer";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'

export function Payment(props) {
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  console.log(props + "props");
  const pricingStructure = location.state?.data;
  console.log(pricingStructure);
  
  return (
    <div>
        { !success ?
      <div className="flex flex-col md:flex-row justify-around items-center md:bg-white p-4 rounded-lg">
          <div className="flex flex-col justify-between items-center  md:h-[450px] md:w-[300px] text-center md:p-8 md:border-r border-gray-300">
            <h2 className="text-3xl">{pricingStructure.name}</h2>
            <h1 className="text-6xl">{pricingStructure.price}</h1>
            <div className="hidden md:block">
              <p>{pricingStructure.classes}</p>
              {pricingStructure.bonus && <p>{pricingStructure.bonus}</p>}
            </div>
          </div>
            <div className="md:w-[70%]flex flex-col items-center pl-4">
              <h1 className="hidden md:block text-3xl text-center mb-12">Finaliza tu inscripcion!</h1>
                <StripeContainer plan={pricingStructure.plan} success={success} setSuccess={setSuccess}/>
      </div> 

      </div> :
      <div>
          <h1>Felicidades, ya eres parte de English Direct! Nos vemos en tu primera clase.</h1>
        <Link to={subscribed ? '/dashboard' : '/pricing' } className=" rounded-lg bg-blue-200 text-3xl p-5 m-10" >EMPIEZA YA!</Link>
        </div>
    }

    </div>
  );
}
