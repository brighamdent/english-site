import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'
import React from 'react'


const PUBLIC_KEY = 'pk_test_51OYENxA1KBKXgU2EmyAVe6BWuxbVNQyTx8YWk3YJpWziUdSsU9P5fEQxyfJ7IyHfOxCqjmuZ9SXKDvRcBEVbW0aw00QbswD3Ci'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer({plan}) {
  return (
  <Elements options={{locale:'es'}} stripe={stripeTestPromise}>
      <PaymentForm plan={plan}/>
    </Elements>
  )
}
