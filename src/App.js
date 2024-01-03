import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import Payment from "./Payment";
import CheckoutPage from "./CheckoutPage";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Header from "./Header";
import OrderSuccessful from "./OrderSuccessful";

const promise = loadStripe(
  "pk_test_51OUDS3Hg9Pf38ZgBMlatUeldROYNPFYDsE9Uzf742YpXPPJB90pRNAqorw5co34JNDHNF3INT71I35eKNYxrviHi00lHWvbref"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Header />
                <Payment />
              </Elements>
            }
          />
          <Route path="/" element={<MainPage />} />
          <Route path="/orderSuccessful" element={<OrderSuccessful />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
