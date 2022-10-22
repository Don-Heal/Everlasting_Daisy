import React from "react";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1>Everlasting Daisy & Co</h1>
        <div className="home-backround">
          <div className="welcome">
            <h2>Welcome</h2>
            <p>
              Providing personalised gifts for any occasion and baby items all
              handmade
            </p>
            <div>
              <button>Products</button>
            </div>
          </div>
          <div className="about-us">
            <h2>Getting to Know Us</h2>
            <p> Find out who we are and what we have to offer!</p>
            <div>
              <button>Learn More</button>
            </div>
          </div>
          <div className="information">
            <h2>Locations</h2>
            <p> Northern Beaches </p>
            <p>Central Coasts</p>
            <p> New South Whales</p>
            <h2> Follow </h2>
            <div>
              <button>Facebook</button>
            </div>
            <div>
              <button>Instagram</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
