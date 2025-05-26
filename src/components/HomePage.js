import React from "react";
import "./styles/HomePage.css";
import HomeGif from "./assets/Home.gif";
import Food from "./Food.js";
import About from "./About.js";
import Contact from "./Contact.js";
import DeliveryGif from "./assets/Delivery.gif";

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

          <h3 className="line1"> Timing : 5:00 pm to 9:30pm at evening.
            Free home delivery order up to 50₹.</h3>
          <h3 className="line1"> Chicken handi & Mutton handi orders are accepted here.</h3>

          <h3 className="line1">
            {" "}
            Timing : 5:00 pm to 9:30pm at evening. Free home delivery! order up
            to 50₹.
          </h3>
          <h3 className="line1">
            {" "}
            Chicken handi & Mutton handi orders are accepted here.
          </h3>
        </div>
        <div className="delivery">
          {" "}
          <img src={DeliveryGif} alt="Delivery" className="delivery-gif" />
        </div>
      </div>
      <Food />

      <About />

      <Contact />
    </>
  );
}

export default HomePage;
