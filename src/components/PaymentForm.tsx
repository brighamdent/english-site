import { PaymentElement, CardElement, useElements, useStripe,} from "@stripe/react-stripe-js"
import axios from "axios"
import { useState } from 'react'
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm({plan}) {
    const [success, setSuccess ] = useState(false)
    const [loading, setLoading] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const {currentUser, getUserData} = useAuth() 
    const userRef = firebase.firestore().collection('Users').doc(currentUser.email);

    const handleSubmit = async (event) => {
        setLoading(true)
        event.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

       
    
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const name = `${firstName} ${lastName}`


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                plan: plan,
                id,
                name,
                email: currentUser.email,
            })
            if(response.data.success) {
                console.log("Successful payment")
            const customerId = response.data.customerId
            const subscriptionId = response.data.subscriptionId 
            const subscriptionItemId = response.data.subscriptionItemId
            const subscriptionType = response.data.subscriptionType
            console.log(response)   
                setSuccess(true)
                userRef.update({
              subscribed: true,
              customerId:customerId,
              subscriptionId: subscriptionId,
              subscriptionItemId: subscriptionItemId,
              subscriptionType: subscriptionType
            })
            .then(() => {
              console.log('Subscription updated successfully');
              getUserData() 
            })
            .catch((error) => {
              console.error('Error updating subscription: ', error);
            }); 
            } 

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
    setLoading(false)
}

    return (
        <>
        {!success ?  
        <div>
      {loading ? <div className="bg-grey-200 w-full h-full flex items-center justify-center"><FontAwesomeIcon className='fixed top-1/2 text-6xl' icon={faSpinner} spinPulse /></div> :
          <form onSubmit={handleSubmit}>
          <fieldset className="mb-6 flex flex-col md:flex-row justify-around">
            <label className="block text-left">
              <h1 className='mb-2 text-xl'>Nombre</h1>
              <input className=' border-2 border-black/25 rounded-[10px] h-14 p-6' type='text' name='firstName' required />
            </label>
            <label>
              <h1 className='mb-2 text-xl'>Apellido</h1>
              <input className=' border-2 border-black/25 rounded-[10px] h-14 p-6' type='text' name='lastName' required />
            </label>
          </fieldset>
          <label>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS}/>
              </div>
            </fieldset>
          </label>
          <button className="pay-button">Pagar</button>
        </form>}
        </div>
        :
       <div>
           <h2>Felicidades, ya eres parte de English Direct! Nos vemos en tu primera clase.</h2>
       </div> 
        }
            
        </>
    )
}
