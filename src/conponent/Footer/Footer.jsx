import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
export const Footer = () => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  // const handleClick = (e) => {
  //   e.preventDefault();

  //   const targetAttr = e.target.getAttribute("href");
  //   const location = document.querySelector(targetAttr).offsetTop;

  //   window.scrollTo({
  //     left: 0,
  //     top: location - 30,
  //   });
  // };

  return (
    <div className="footer_section">
      <div className="footer">
        <div className="footer_box">
          <div className="header_logo" onClick={() => navigate("/")}>
            <img src={logo} alt="Modern Furniture Logo" />
            <h1>
              <span>Modern</span>
              <span>Furniture</span>
            </h1>
          </div>
          <p className="description">
            Furniture brings comfort and function to our daily lives and adds to
            the overall style and decor of our living spaces.
          </p>
        </div>
        <div className="footer_box">
          <h4>Top Categories</h4>
          <p>
            <NavLink to="/shop">Mobile Phones</NavLink>
            {/* <a onClick={handleClick} href="#mobile">
              Mobile Phones
            </a> */}
          </p>
          <p>
            <NavLink to="/shop">Modern Sofa</NavLink>
            {/* <a onClick={handleClick} href="#sofa">
              Modern Sofa
            </a> */}
          </p>
          <p>
            <NavLink to="/shop">Arm Chair</NavLink>
            {/* <a onClick={handleClick} href="#chair">
              Arm Chair
            </a> */}
          </p>
          <p>
            <NavLink to="/shop">Smart Watches</NavLink>
            {/* <a onClick={handleClick} href="#watches">
              Smart Watches
            </a> */}
          </p>
        </div>

        <div className="footer_box">
          <h4>Useful Links</h4>
          <p>
            <NavLink to="/shop">Shop</NavLink>
          </p>
          <p>
            <NavLink to="/cart">Cart</NavLink>
          </p>
          <p>
            <NavLink to="/logIn">Login</NavLink>
          </p>
          <p>
            <NavLink to="/logIn">Privacy Policy</NavLink>
          </p>
        </div>
        <div className="footer_box">
          <h4>Contact</h4>
          <p className="contact">
            <span>
              <i className="ri-map-pin-2-fill"></i>
            </span>
            <span>123 Nasr City, Cairo, Egypt</span>
          </p>
          <p className="contact">
            <span>
              <i className="ri-phone-fill"></i>
            </span>
            <span>+01026469007</span>
          </p>
          <p className="contact">
            <span>
              <i className="ri-mail-fill"></i>
            </span>
            <span>example123@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="copyright">
        Copyright {year} developed by <NavLink to="/"> Ahmed Allawi.</NavLink>{" "}
        All rights reserved
      </div>
    </div>
  );
};
