import { CardElement, useElements, useStripe,} from "@stripe/react-stripe-js"
import axios from "axios"
import { useState } from 'react'


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
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

       
    
    const name = event.target.name.value;
    const email = event.target.email.value;


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                plan: plan,
                id,
                name,
                email,
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            } 

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ?  
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type='text' name='name' required />
          </label>
          <label>
            Email:
            <input type='email' name='email' required />
          </label>
          <label>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
          </label>
            <button className="pay-button">Pay</button>
        </form>
        :
       <div>
           <h2>You just started your language learning journey with us!</h2>
       </div> 
        }
            
        </>
    )
}
