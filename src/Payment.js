import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./Stateprovider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";
import { collection, setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Payment() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false); // Change to false
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log(clientSecret);

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    toast.warn("Processing...", {
      position: toast.POSITION.BOTTOM_CENTER,
      theme: "dark",
    });

    try {
      const customerName = "Ischit";
      const customerAddress = "IIT Roorkee";
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: customerName,
              address: {
                line1: customerAddress,
              },
            },
          },
        }
      );

      if (error) {
        setError(`Payment failed: ${error.message}`);
        setProcessing(false);
      } else if (paymentIntent.status === "requires_action") {
        const { error: authenticationError } = await stripe.handleCardAction(
          clientSecret
        );

        if (authenticationError) {
          setError(`Authentication failed: ${authenticationError.message}`);
        } else {
          setSucceeded(true);
          setError(null);
          setProcessing(false);

          dispatch({
            type: "EMPTY_THE_BASKET",
          });

          navigate("/orders", { replace: true });
        }
      } else if (paymentIntent.status === "succeeded") {
        const userDocRef = doc(db, "users", user?.uid);
        const ordersCollectionRef = collection(userDocRef, "orders");

        const orderDocRef = doc(ordersCollectionRef, paymentIntent?.id);

        const data = {
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        };
        console.log(data);
        await setDoc(orderDocRef, data);

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_THE_BASKET",
        });

        navigate("/orders", { replace: true });
      }
    } catch (error) {
      console.error("Error confirming payment:", error.message);
      setError(`Payment failed: ${error.message}`);
      setProcessing(false);
    }
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout {<Link to="/checkout">{basket?.length} items</Link>}</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <input
              type="text"
              className="payment__addressInput"
              placeholder="Address Line 1"
            />
            <br />
            <input
              type="text"
              className="payment__addressInput"
              placeholder="Address Line 2"
            />
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review your items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix="₹"
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
