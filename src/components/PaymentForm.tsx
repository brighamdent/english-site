import React from "react";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

export default function PaymentForm({plan,success, setSuccess, loading, setLoading}) {
  const { currentUser, getUserData } = useAuth();
  const userRef = firebase
    .firestore()
    .collection("Users")
    .doc(currentUser.email);
  const stripe = useStripe();
  const elements = useElements();

  const CARDS_ELEMENT_OPTIONS = {
  showIcon: true,
  style: {
    base: {
      color: '#000',
      fontSize: '25px',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      '::placeholder': {
        color: '#aab7c4',
      },
      iconColor: '#666EE8',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "25px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)

    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);
    // You can also handle validation and formatting for each field individually
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const name = `${firstName} ${lastName}`

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement,
      // Additional information can be passed here
    });
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

  };

  return (
    <div>
      <form className='flex flex-col items-center' onSubmit={handleSubmit}>
        <fieldset className="md:mb-4 flex flex-col items-center md:flex-row">
          <label className="block text-left text-xl mb-2 md:mb-0">
            <h1 className='ml-2 mb-2'>Nombre</h1>
            <input className='text-[25px] border-2 border-black/25 rounded-[10px] p-3 w-[325px] md:w-[225px]' type="text" name="firstName" required/>
          </label>
          <label className="block text-xl text-left md:ml-4 mb-2 md:mb-0">
            <h1 className='ml-2 mb-2'>Apellido</h1>
            <input className=' text-[25px] border-2 border-black/25 rounded-[10px] pl-2 p-3 w-[325px] md:w-[225px]' type="text" name="lastName" required/>
          </label>
        </fieldset>
        <fieldset>
          <label className="block text-left mb-4 w-[325px] md:w-[466px]">
          <h1 className='ml-2 mb-2 text-xl'>Numero de Tarjeta</h1>
           <div className="bg-white flex items-center border-2 pl-2 border-black/25 rounded-[10px]">
            <CardNumberElement  options={CARDS_ELEMENT_OPTIONS} />
           </div>
          </label>
        </fieldset>
        <fieldset className="mb-4 flex flex-col md:flex-row items-center">
          <label className="block text-left mb-2">
            <h1 className=' ml-2 md:ml-0 mb-2 text-xl'>Fecha de Vencimiento</h1>
            <div className="bg-white flex items-center  border-2 pl-2 border-black/25 rounded-[10px] w-[325px] md:w-[225px]">
              <CardExpiryElement options={CARDS_ELEMENT_OPTIONS} />
            </div>
          </label>
          <label className="block text-left md:ml-4 mb-2">
            <h1 className='ml-2 mb-2 text-xl'>CVC</h1>
            <div className="bg-white flex items-center  border-2 pl-2 border-black/25 rounded-[10px] w-[325px] md:w-[225px]">
              <CardCvcElement options={CARDS_ELEMENT_OPTIONS} />
            </div>
          </label>
        </fieldset>
        <button className='w-[325px] md:w-[466px] rounded-[10px] bg-blue-200 text-2xl p-3' type="submit" disabled={!stripe}>
          Inciar Subscripcion
        </button>
      </form>

      

    </div>
  );
}
