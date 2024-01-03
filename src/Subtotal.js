import React, { useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./Stateprovider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const disabled =
    getBasketTotal(basket) > 0 && getBasketTotal(basket) < 1000000
      ? false
      : true;

  useEffect(() => {
    if (getBasketTotal(basket) > 1000000) {
      toast.error("Cart value too big", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: "dark",
      });
    }
  }, [basket]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button disabled={disabled} onClick={(e) => navigate("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
