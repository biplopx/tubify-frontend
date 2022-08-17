import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements, } from '@stripe/react-stripe-js';
import { toast} from 'react-toastify';
// const email = "mahediimun@gmail.com"
const CheckoutFrom = ({ data }) => {
  const { userName, userEmail, price, _id, plan, phoneNum } = data;
  const [disabled, setDisabled] = useState(false)
  const [cardError, setCardError] = useState('')
  const [success, setSuccess] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("http://localhost:5000/payment/create-payment-intent", {
      method: "POST",
      headers: {
        'authorization': `Barer ${localStorage.getItem('accessToken')}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then(data => {
        setClientSecret(data.clientSecret)
      });
  }, [price]);
  const handleSubmit = async (event) => {

    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
    if (error) {
      setCardError(error.message)
    } else {
      setCardError('')
      // confirm card payment
      const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: userName,
              email: userEmail,
            },
          },
        },
      );
      if (intentError) {
        setCardError(error?.message)
        setSuccess('')

      } else {
        setTransactionId(paymentIntent.id)
        setCardError('')
        setSuccess('congratulations success payment')
        const payment = {
          transactionId: paymentIntent.id,
          planId: _id,
          statusPending: true,
          plan: plan,
          user: {
            username: userName,
            userEmail: userEmail,
            phoneNum: phoneNum,
          },
          price: price,
        };
        if (paymentIntent.id) {
          fetch(`http://localhost:5000/payment/plan-booked/${userEmail}`, {
            method: 'PUT',
            headers: {
              'authorization': `Barer ${localStorage.getItem('accessToken')}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payment)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if (data.modifiedCount > 0) {
                toast.success('successfully payment ')
                setDisabled(true)
              }
            })
        }
      }
    }
  };



  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div className=' p-5'>
      {cardError && <p className=' text-red-700'>{cardError}</p>}
      {success && <>
        <p className=' text-success'>{success}</p>
        <p className=' text-base-100'> your transaction id : <span className='text-base-300'>{transactionId}</span></p>
      </>}
      </div>

      {<button className=' border px-2 rounded mt-5 ' type="submit" disabled={!stripe || !clientSecret || disabled}>
        Pay
      </button>}

    </form>
  );
};

export default CheckoutFrom;