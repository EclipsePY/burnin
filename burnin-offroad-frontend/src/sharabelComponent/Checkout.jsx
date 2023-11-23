// import { CircularProgress } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router";
// import useAuth from "../../../hooks/useAuth";

const CheckOut = ({ id }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  //   const { price, patientName, _id } = userInfo;
  //   const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  const [p, setP] = useState();

  useEffect(() => {
    const storedPrice = localStorage.getItem("price");

    setP(Number(storedPrice));
  }, []);

  // load client secret
  useEffect(() => {
    if (p) {
      axios
        .post("http://localhost:8080/api/v1/payments/checkout", {
          price: p,
        })
        .then((res) => {
          // console.log(res);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [p]);
  //   console.log(p);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("came");

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    setProcessing(true);
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
    }

    // confirm card payment intent
    const { paymentIntent, error: IntentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            // name: patientName,
            // email: user.email,
          },
        },
      });
    if (IntentError) {
      setError(IntentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Your Payment process successfuly!");
      setProcessing(false);

      // payment confirmed
      const payment = {
        transaction: paymentIntent.id,
        last4: paymentMethod.card.last4,
      };

      // now we will update info to database
      axios
        .put(`http://localhost:8080/api/v1/toys/update/${id}`, { payment: p })
        .then((res) => {
          if (res.data?.payment) {
            navigate("/payment/success");
          } else {
            navigate("/payment/cancel");
          }
          //   if (res.data.modifiedCount) {
          //     navigate("/dashboard/appointment");
          //   }
        });
    }
  };
  return (
    <div
      style={{
        margin: "30px 20px",
      }}
    >
      <form onSubmit={handleSubmit} className="h-form">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {processing ? (
            <h2>Loading...</h2>
          ) : (
            // <CircularProgress />
            <button
              style={{
                color: "white",
                marginTop: 2,
                background: "linear-gradient(to right, #19D3B1, #0FCFE9)",
                padding: "10px 30px",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
              type="submit"
              disabled={!stripe || success}
            >
              Pay Now : ${p}
            </button>
          )}
        </div>
      </form>
      {success && (
        <p
          style={{
            textAlign: "center",
            color: "green",
          }}
        >
          {success}
        </p>
      )}
      {error && (
        <p
          style={{
            textAlign: "center",
            color: "red",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default CheckOut;
