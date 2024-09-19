import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");
  const {getTotalCartAmount} = useContext(Context)

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>
      <ul className="nav-menu">
        <Link to='/'
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a href="#menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a href="#app-download"
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a href="#footer"
          onClick={() => setMenu("Contact")}
          className={menu === "Contact" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="Search" className="search"/>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
        <div className="nav-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Cart" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
