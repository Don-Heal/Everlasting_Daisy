import React from "react";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import cart from "../assets/images/cart-24.png";
import { Modal, Button } from "react-bootstrap";
// import { useState } from "react";

const Navigation = () => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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
            <Link to="/personalisedOrders">
              <button class="dropbtn">Order Now</button>
            </Link>
            <div class="dropdown-content">
              <Link to="/personalisedOrders">Personalised Orders</Link>
              <Link to="/babyOrders">Baby Orders</Link>
            </div>
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
        <div class="cart">
          <button className="buttons" onClick={handleShow}>
            <img src={cart} alt="Everlasting Logo" />
            <p>Your Cart (0)</p>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
