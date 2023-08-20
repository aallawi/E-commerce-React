import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { Container, Row } from "reactstrap";
import Helmet from "../Helmet/Helmet";
import "./Header.css";

import logo from "../../assets/images/logo.png";
import User from "../../assets/images/user.png";

import { useSelector } from "react-redux";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const total_Quantity = useSelector((state) => state.cart.total_Quantity);

  const headerRef = useRef(null);
  const headerFunc = () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      headerRef.current.classList.add("sticky_header");
    } else {
      headerRef.current.classList.remove("sticky_header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  return (
    <>
      <Helmet title={"Home"} />
      <header ref={headerRef} className="sticky_header">
        <div className="header">
          {/* Logo */}
          <div className="header_logo" onClick={() => navigate("/")}>
            <img src={logo} alt="Modern Furniture Logo" />
            <h1>
              <span>Modern </span>
              <span>Furniture</span>
            </h1>
          </div>
          {/* Menu */}
          <div className="header_navigation">
            <ul className="menu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="cart">Cart</NavLink>
              </li>
            </ul>
          </div>
          <div className="header_icons">
            {/* icone heart */}
            <div className="icon_fav icon" onClick={() => navigate("/shop")}>
              <i className="ri-heart-line"></i>
              <span className="badge">0</span>
            </div>
            {/* icone cart */}
            <div className="icon_cart icon" onClick={() => navigate("/cart")}>
              <i className="ri-shopping-cart-line"></i>
              <span className="badge">{total_Quantity}</span>
            </div>
            {/* icone User */}
            <div className="dropdown icon_user">
              <button className="dropbtn">
                <img src={User} alt="User" />
              </button>
              <div className="dropdown_content">
                <div>
                  <NavLink to="signup">Sign Up</NavLink>
                  <NavLink to="login">Log in</NavLink>
                </div>
              </div>
            </div>
            {/* icone Menu Mobile */}
            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile_menu"
            >
              {isMenuOpen ? (
                <i className="ri-close-fill"></i>
              ) : (
                <i className="ri-menu-fill"></i>
              )}
            </div>
          </div>
        </div>
        {/* Menu Mobile */}
        <div>
          {isMenuOpen ? (
            <div>
              <div className="mobile_overlay">
                <div className="section_menu">
                  <div
                    className="close"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <span>
                      <i className="ri-close-fill"></i>
                    </span>
                  </div>
                  <div className="overlay_menu">
                    <ul>
                      <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <NavLink to="shop">Shop</NavLink>
                      </li>
                      <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <NavLink to="cart">Cart</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="complete"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                ></div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );
};
