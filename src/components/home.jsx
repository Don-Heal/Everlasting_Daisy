import React from "react";
import "./styles/main.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-banner">
      <div className="home-image">
        <div className="info-containers">
          <div className="small-container">
            <h2>Welcome</h2>
            <p>
              Providing personalised gifts for any occasion and baby items all
              handmade
            </p>
            <div className="buttons">
              <Link to="./products">
                <button type="button">Shop Now</button>
              </Link>
            </div>
            <br></br>
            <br></br>
          </div>
          <div className="large-containers">
            <h2>Getting to Know Us</h2>
            <p> Find out who we are and what we have to offer!</p>
            <div className="buttons">
              <Link to="./about">
                <button>Learn More</button>
              </Link>
            </div>
            <br></br>
            <br></br>
          </div>
          <div className="information">
            <div className="location">
              <h2>Locations</h2>
              <p>
                Northern Beaches <br></br> Central Coasts <br></br> New South
                Whales
              </p>
            </div>
            <div className="social">
              <h2> Follow </h2>
              <div className="buttons">
                <a href="https://www.facebook.com/everlastingdaisyandco">
                  <button>Facebook</button>
                </a>
              </div>
              <div className="buttons">
                <a href="https://www.instagram.com/everlasting_daisy_/">
                  <button>Instagram</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
