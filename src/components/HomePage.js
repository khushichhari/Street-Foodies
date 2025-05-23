import React from "react";
import "./styles/HomePage.css";
import HomeGif from "./assets/Home.gif";
import Food from "./Food.js";
import About from "./About.js"
import Contact from "./Contact.js";

function HomePage() {
  return (
    <>
      <div
        className="homepage-background"
        style={{ backgroundImage: `url(${HomeGif})` }}
      >
        <div className="homepage-content">
          <h3 className="line">
            Food Cravings? Let's Order Snacks...!
            <span className="tag">Crave. Crunch. Repeat</span>
          </h3>

          {/* Tel link to open dial pad */}
          <a href="tel:9503208766">
            <button className="btn">Order Now</button>
          </a>
          <h3 className="line1"> Timing : 5:00 pm to 9:30pm at evening</h3>
        </div>
      </div>
      <Food/>
      
      <About/>

      <Contact/>
    </>
  );
}

export default HomePage;