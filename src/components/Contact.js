import React from "react";
import "./styles/Contact.css";
import stallImage from "./assets/stall.png"; // Adjust path if needed

function Contact() {
  return (
    <>
      <h1 className="contact-head">Contact Us</h1>

      <div className="contact-container">
        <div className="contact-left">
          <img src={stallImage} alt="Street Food Stall" className="stall-img" />
        </div>

        <div className="contact-right">
          <p>Feel free to reach out for queries or orders.</p>
          <h2>Call us : 9503208766</h2>
          <h3>Timing : 5:00 pm to 9:30pm at evening</h3>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Street Foodies. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Contact;