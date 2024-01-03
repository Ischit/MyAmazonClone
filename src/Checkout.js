import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./Stateprovider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkOut">
      <div className="checkout__left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/ATV_IN_Desktop_FB_CAK2/2dd6e90e-b1e7-49b0-b45b-7312b545c475.__SX3800__SY760__QL60__._TTH_.jpeg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

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

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
