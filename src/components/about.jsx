import React from "react";
import dom from "../assets/images/Dom.jpg";
import ev from "../assets/images/Evelyn.jpg";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="large-container">
          <div className="ev-container">
            <div className="intro">
              <h1>Hello</h1>
              <h2>My name is Evelyn</h2>
              <p>
                I'm a mother of two beautiful boys, Drew and Zane. I have a love
                for the creative arts and have always enjoyed creating things
                for my family. I am an Early Childhood Teacher but in my spare
                time use creativity and imagination to make products for our
                business.
              </p>
            </div>
            <div className="aboutimage">
              <img src={ev} alt="Evelyn" />
            </div>
          </div>
        </div>
        <div className="large-container">
          <div className="dom-container">
            <div className="aboutimage">
              <img src={dom} alt="Dom" />
            </div>
            <div className="intro">
              <h1>Hello</h1>
              <h2>My name is Dom</h2>
              <p>
                I have a love for graphic design and anything creative. I am a
                Vet Nurse but spend a lot of my time designing and creating new
                products that are homemade for the business.
              </p>
            </div>
          </div>
        </div>
        <div className="large-container">
          <div className="story-container">
            <div className="story">
              <h1>Our Story</h1>
              <p>
                We both met playing soccer in 2017. After building our
                friendship we found out we both had a love for craft and making
                things. So in 2022 we decided to start our business together to
                do something we love and this is how Everlasting Daisy & Co was
                created. We both just want to provide beautiful personalised
                items for people to share with their loved ones. We wish to grow
                our company to expand our range. We hope you enjoy our products
                as much as we enjoy making them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
