import React, { useContext } from "react";
import "./cart.css";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, item_list, removeFromCart, getTotalCartAmount } = useContext(Context);
  const navigate = useNavigate()

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {item_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>{item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
              <p>{getTotalCartAmount()===0?0:500}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>PKR: {getTotalCartAmount()===0?0:getTotalCartAmount()+500}</b>
            </div>
            <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
          </div>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter here</p>
            <div className="cart-promo-input">
              <input type="text" placeholder="Enter Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
