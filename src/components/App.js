import "../App.css";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";
import Products from "../components/products";
import Baby from "../components/babyProducts";
import Orders from "../components/orders";
import Contact from "../components/contact";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/babyProducts" element={<Baby />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
