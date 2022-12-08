import React from "react";
import logo from "../assets/images/logo.jpg"

const Navigation = () => {

  return (
    <>
    <div className="home">
    <div className="home-title">
      <img src={logo} alt="Everlasting Logo" />
    <h1>Everlasting Daisy & Co</h1>
    </div>
    </div>
    <nav class="nav">
      <div class="nav-bar">
      <div class="dropdown">
          <a href="/">
            <button class="dropbtn">Home</button>
            </a>
        </div>
      <div class="dropdown">
          <a href="/about">
            <button class="dropbtn">About Us</button>
            </a>
        </div>
        <div class="dropdown">
          <a href="/products">
            <button class="dropbtn">Personalised Products</button>
            <div class="dropdown-content">
              <a href="/products/bottles">Bottles</a>
              <a href="/products/mugs">Mugs</a>
              <a href="/products/glasses">Glasses</a>
              <a href="/products/giftBox">Gift Boxes</a>
            </div>
          </a>
        </div>
        <div class="dropdown">
          <a href="/baby_products">
            <button class="dropbtn">Baby Products</button>
            <div class="dropdown-content">
              <a href="/baby_products/babyBibs">Baby Bibs</a>
              <a href="/baby_products/teether">Baby Teethers</a>
              <a href="/baby_products/dummyChains">Dummy Chains</a>
            </div>
          </a>
        </div>
        <div class="dropdown">
          <a href="/orders">
            <button class="dropbtn">Order Now</button>
            </a>
        </div>
        <div class="dropdown">
          <a href="/contact">
            <button class="dropbtn">Contact Us</button>
            </a>
        </div>
      </div>
      <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><a class="menu__item" href="/">Home</a></li>
      <li><a class="menu__item" href="/about">About Us</a></li>
      <li><a class="menu__item" href="/products">Personalised Products</a></li>
      <li><a class="menu__item" href="/baby_products">Baby Products</a></li>
      <li><a class="menu__item" href="/orders">Order Now</a></li>
      <li><a class="menu__item" href="/contact">Contact Us</a></li>
    </ul>
  </div>
    </nav>
    </>
  );
};

export default Navigation;
