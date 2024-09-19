import React, { useContext } from "react";
import "./ClothItem.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const ClothItem = ({ id, name, image, price, }) => {

  const { cartItem, addToCart, removeFromCart } = useContext(Context);

  return (
    <div className="cloth-item">
      <div className="cloth-item-img-container">
        <img className="cloth-item-image" src={image} alt="" height={450} />
        {!cartItem[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="cloth-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="cloth-item-info">
        <div className="cloth-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="cloth-item-price">PKR: {price}/-</p>
      </div>
    </div>
  );
};

export default ClothItem;
