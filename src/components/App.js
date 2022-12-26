import "../App.css";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Products from "./personalProducts";
import Baby from "./babyProducts";
import Orders from "./personalisedOrders";
import BabyOrders from "./babyOrders";
import Contact from "./contact";
import Bottles from "./products/bottles";
import Mugs from "./products/mugs";
import Glasses from "./products/glasses";
import Gift from "./products/giftBox";
import Bibs from "./baby_products/babyBibs";
import Teether from "./baby_products/babyTeether";
import Dummy from "./baby_products/dummyChains";
import Apparel from "./baby_products/apparel";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="baby_products" element={<Baby />} />
          <Route path="personalisedOrders" element={<Orders />} />
          <Route path="babyOrders" element={<BabyOrders />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products/bottles" element={<Bottles />} />
          <Route path="products/mugs" element={<Mugs />} />
          <Route path="products/glasses" element={<Glasses />} />
          <Route path="products/giftBox" element={<Gift />} />
          <Route path="baby_products/babyBibs" element={<Bibs />} />
          <Route path="baby_products/teether" element={<Teether />} />
          <Route path="baby_products/dummyChains" element={<Dummy />} />
          <Route path="baby_products/apparel" element={<Apparel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
