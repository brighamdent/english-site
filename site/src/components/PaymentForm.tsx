import axios from "axios";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

export default function PaymentForm({ plan, setSuccess, setLoading }: any) {
  const { currentUser, getUserData } = useAuth();
  const [error, setError] = useState("");

  if (!currentUser || !currentUser.email) {
    return;
  }
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
        color: "#000",
        fontSize: "25px",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        "::placeholder": {
          color: "#aab7c4",
        },
        iconColor: "#666EE8",
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const name = `${firstName} ${lastName}`;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "cardnumber",
      card: cardNumberElement,
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          plan: plan,
          id,
          name,
          email: currentUser.email,
        });
        if (response.data.success) {
          console.log("Successful payment");
          const customerId = response.data.customerId;
          const subscriptionId = response.data.subscriptionId;
          const subscriptionItemId = response.data.subscriptionItemId;
          const subscriptionType = response.data.subscriptionType;
          console.log(response);
          setSuccess(true);
          userRef
            .update({
              subscribed: true,
              customerId: customerId,
              subscriptionId: subscriptionId,
              subscriptionItemId: subscriptionItemId,
              subscriptionType: subscriptionType,
            })
            .then(() => {
              console.log("Subscription updated successfully");
              getUserData();
            })
            .catch((error) => {
              console.error("Error updating subscription: ", error);
            });
        }
      } catch (error) {
        console.log("Error", error);
        setError("There was an error processing your payment");
      }
    } else {
      console.log(error.message);
      setError("There was an error processing your payment");
    }
    setLoading(false);
  };

  return (
    <div>
      {error && (
        <div className="flex items-center bg-red-200 text-red-500 border border-red-500 w-[325px] md:w-[466px] rounded-md p-4 h-16 mb-2 md:mb-4">
          <FontAwesomeIcon className="mr-4" icon={faCircleExclamation} />
          <h1>{error}</h1>
          <FontAwesomeIcon
            className="ml-4 lg:ml-[15px]"
            onClick={() => setError("")}
            icon={faXmark}
          />
        </div>
      )}
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <fieldset className="md:mb-4 flex flex-col items-center md:flex-row">
          <label className="block text-left text-xl mb-2 md:mb-0">
            <h1 className="ml-2 mb-2">Nombre</h1>
            <input
              className="text-[25px] border-2 border-black/25 rounded-[10px] p-3 w-[325px] md:w-[225px]"
              type="text"
              name="firstName"
              required
            />
          </label>
          <label className="block text-xl text-left md:ml-4 mb-2 md:mb-0">
            <h1 className="ml-2 mb-2">Apellido</h1>
            <input
              className=" text-[25px] border-2 border-black/25 rounded-[10px] pl-2 p-3 w-[325px] md:w-[225px]"
              type="text"
              name="lastName"
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <label className="block text-left mb-4 w-[325px] md:w-[466px]">
            <h1 className="ml-2 mb-2 text-xl">Numero de Tarjeta</h1>
            <div className="bg-white flex items-center border-2 pl-2 border-black/25 rounded-[10px]">
              <CardNumberElement options={CARDS_ELEMENT_OPTIONS} />
            </div>
          </label>
        </fieldset>
        <fieldset className="mb-4 flex flex-col md:flex-row items-center">
          <label className="block text-left mb-2">
            <h1 className=" ml-2 md:ml-0 mb-2 text-xl">Fecha de Vencimiento</h1>
            <div className="bg-white flex items-center  border-2 pl-2 border-black/25 rounded-[10px] w-[325px] md:w-[225px]">
              <CardExpiryElement options={CARDS_ELEMENT_OPTIONS} />
            </div>
          </label>
          <label className="block text-left md:ml-4 mb-2">
            <h1 className="ml-2 mb-2 text-xl">CVC</h1>
            <div className="bg-white flex items-center  border-2 pl-2 border-black/25 rounded-[10px] w-[325px] md:w-[225px]">
              <CardCvcElement options={CARDS_ELEMENT_OPTIONS} />
            </div>
          </label>
        </fieldset>
        <button
          className="w-[325px] md:w-[466px] rounded-[10px] bg-blue-200 hover:bg-blue-300 text-2xl p-3"
          type="submit"
          disabled={!stripe}
        >
          Inciar Subscripcion
        </button>
      </form>
    </div>
  );
}
