import React from "react";
import "./Placeorder.css";
import { Context } from "../../context/Context";
import { useContext } from "react";

const PlaceOrder = () => {

const {getTotalCartAmount} = useContext(Context)

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Lase name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>PKR: {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>{500}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>PKR: {getTotalCartAmount() + 500}</b>
            </div>
            <button>
              Proceed to payment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
