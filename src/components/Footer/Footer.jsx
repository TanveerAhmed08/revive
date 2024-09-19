import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.Logo2} alt="" width={173} className="logo" />
          <p>
            You Deserve A Second Chance, At Revive Clothing, we believe fashion
            should be both beautiful and responsible. Our pieces are crafted
            with care from sustainable materials.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>  
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privicy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <Link to={"https://wa.me/message/EZFEYRR2EASEP1"} ><li> <FontAwesomeIcon icon={faWhatsapp} size="1x" /> +92 314 070 4770</li></Link>
            <li> <FontAwesomeIcon icon={faEnvelope} size="1x" /> revivee9@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 &copy; Revive.com - All Right Reserved. </p>
    </div>
  );
};

export default Footer;
