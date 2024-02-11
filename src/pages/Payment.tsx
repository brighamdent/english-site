import { useState, useEffect} from "react";
import StripeContainer from "../components/StripeContainer";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Schedule from "../components/Schedule";
import firebase from "firebase/compat/app";
import { useAuth } from "../context/AuthContext";

export function Payment(props) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState('');
  const { currentUser } = useAuth();
  const location = useLocation();
  const pricingStructure = location.state?.data;
  const navigate = useNavigate()
  const userRef = firebase
    .firestore()
    .collection("Users")
    .doc(currentUser.email);

  useEffect(() => {
   if (success == true) {
     userRef.update({
        schedule,
      }) 
    
   } 

  }, [success])

  const handleBack = () => {
    if(schedule) {
      setSchedule('')
    } else {
      navigate('/pricing')
    }
  }
  
  return (
    <div className="relative">
      {loading && <div className="fixed bg-black/50 left-0 z-[1000]  top-0 w-full h-full flex items-center justify-center">
        <FontAwesomeIcon className='fixed top-1/2 text-6xl' icon={faSpinner} spinPulse /></div> }
        <div>
        { !success ?
          <div className="flex flex-col md:flex-row justify-around items-center md:bg-white p-4 rounded-lg">
            <FontAwesomeIcon className=" absolute text-3xl top-4 left-4 p-2 rounded-2xl hover:bg-gray-200" onClick={handleBack} icon={faArrowLeft} />
            <div className="flex flex-col justify-between items-center  md:h-[450px] md:w-[300px] text-center md:p-8 md:border-r border-gray-300">
              <h2 className="text-3xl">{pricingStructure.name}</h2>
              <h1 className="text-6xl">{pricingStructure.price}</h1>
              <div className="hidden md:block">
                <p>{pricingStructure.classes}</p>
                {pricingStructure.bonus && <p>{pricingStructure.bonus}</p>}
              </div>
            </div>
            { !schedule ? <Schedule schedule={schedule} setSchedule={setSchedule}/> :
              <div className="md:w-[70%]flex flex-col items-center pl-4">
              <h1 className="hidden md:block text-3xl text-center mb-6">Finaliza tu inscripcion!</h1>
              <StripeContainer plan={pricingStructure.plan} success={success} setSuccess={setSuccess} loading={loading} setLoading={setLoading}/>
            </div> } 

          </div> :
          <div className="flex flex-col">
            <h1 className="text-2xl">Felicidades, ya eres parte de English Direct! Nos vemos en tu primera clase.</h1>
            <Link to='/dashboard'  className=" text-center rounded-lg bg-blue-200 text-3xl p-5 m-10" >EMPIEZA YA!</Link>
          </div>
        }

      </div>
      </div>
  );
}
