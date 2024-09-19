import React, { useContext } from "react";
import "./Item.css";
import { Context } from "../../context/Context";
import ClothItem from "../Clothsitem/ClothItem";

const Item = ({category}) => {

  const { item_list } = useContext(Context);

  return (
    <div className="item-display" id="item-display">
      <h2>Top items near you</h2>
      <div className="item-display-list">
        {item_list.map((item , index)=>{
            if (category==="All" || category===item.category) {
            return <ClothItem key={index} id={item._id} name={item.name}  price={item.price} image={item.image}/>
            }
        })}
      </div>
    </div>
  );
};

export default Item;
