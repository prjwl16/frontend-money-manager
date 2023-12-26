import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { loadStripe } from '@stripe/stripe-js'
import { PaymentElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from '@/APIs/axios.ts'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (elements == null) {
      return
    }
    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit()
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError?.message)
      return
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await axios('http://localhost:3000/create-payment-intent', {
      method: 'POST',
    })
    console.log('res', res)
    const clientSecret = res.data.clientSecret

    const { error } = await stripe?.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        payment_method_data: {
          billing_details: {
            name: 'Jenny Rosen',
            address: {
              line1: '510 Townsend St',
              postal_code: '402301',
              city: 'mahad',
              state: 'maharashtra',
              country: 'IN',
            },
          },
        },
        return_url: 'http://localhost:5173/add/transaction',
      },
    })

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message)
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type='submit' disabled={!stripe || !elements}>
        Pay
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  )
}

const stripePromise = loadStripe(
  'pk_test_51ORfVpSCUpMXoqT4mzPplKPUZqlS8Q2V7iyBKMT638XGo9PpA5WrMZyVP91n1X0qGGYHBIZHQ37lo5lPmjhEWxMz007RXySwy4'
)

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'inr',
  // Fully customizable with appearance API.
  appearance: {
    theme: 'stripe',
    locale: 'auto',
  },
}

const Payment = () => (
  <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>
)

export default Payment
