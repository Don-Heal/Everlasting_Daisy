import React from "react";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="home">
        <div className="home-title">
          <img src={logo} alt="Everlasting Logo" />
        </div>
      </div>
      <nav class="nav">
        <div class="nav-bar">
          <div class="dropdown">
            <Link to="/">
              <button class="dropbtn">Home</button>
            </Link>
          </div>
          <div class="dropdown">
            <Link to="/about">
              <button class="dropbtn">About Us</button>
            </Link>
          </div>
          <div class="dropdown">
            <Link to="/products">
              <button class="dropbtn">Personalised Products</button>
            </Link>
            <div class="dropdown-content">
              <Link to="/products/bottles">Bottles</Link>
              <Link to="/products/mugs">Mugs</Link>
              <Link to="/products/glasses">Glasses</Link>
              <Link to="/products/giftBox">Gift Boxes</Link>
            </div>
          </div>
          <div class="dropdown">
            <Link to="/baby_products">
              <button class="dropbtn">Baby Products</button>
            </Link>
            <div class="dropdown-content">
              <Link to="/baby_products/babyBibs">Bibs</Link>
              <Link to="/baby_products/teether">Teethers</Link>
              <Link to="/baby_products/dummyChains">Dummy Chains</Link>
              <Link to="/baby_products/apparel">Apparel</Link>
            </div>
          </div>
          <div class="dropdown">
            <Link to="/orders">
              <button class="dropbtn">Order Now</button>
            </Link>
          </div>
          <div class="dropdown">
            <Link to="/contact">
              <button class="dropbtn">Contact Us</button>
            </Link>
          </div>
        </div>

        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <ul class="menu__box">
            <li>
              <Link to="/" class="menu__item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" class="menu__item">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" class="menu__item">
                Personalised Products
              </Link>
            </li>
            <li>
              <Link to="/baby_products" class="menu__item">
                Baby Products
              </Link>
            </li>
            <li>
              <Link to="/orders" class="menu__item">
                Order Now
              </Link>
            </li>
            <li>
              <Link to="/contact" class="menu__item">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
