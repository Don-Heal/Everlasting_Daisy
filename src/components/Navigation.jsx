import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav class="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/products">Personalised Products</Link>
      <Link to="/babyProducts">Baby Products</Link>
      <Link to="/orders">Order Now</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
};

export default Navigation;
