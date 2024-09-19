import React from "react";
import "./menu.css";
import { menu_list } from "../../assets/assets";

const Menu = ({ category, setCategory }) => {
  return (
    <div className="menu" id="menu">
      <h1>Explore Our Menu</h1>
      <p className="menu-text">
        T-shirts are made of an elastic, light, and inexpensive fabric that is
        quite comfortable to wear. It’s also offered with a collar or round
        neck.
      </p>
      <div className="menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                );
              }}
              key={index}
              className="menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt="Image"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Menu;
