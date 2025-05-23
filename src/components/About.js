import React from 'react';
import './styles/About.css'; // optional: for styling
import vpGif from './assets/VP.gif';
import tiffinGif from './assets/tiffin.gif';

function About() {
  return (
    <div className="About">
        <h1 className = "abt-head">About Street Foodies</h1>
      <div className="abt-txt">
        <p>
          Hello, I’m <strong>Shankar</strong>. I run a small food stall where I prepare and serve fresh, homemade meals every day. 
          This isn’t just a business for me—it's something I genuinely care about. 
          I believe in keeping food simple, clean, and satisfying. There's a sense of fulfillment I get when someone enjoys a meal I've prepared. 
          That’s what keeps me going.
        </p>
        <p>
          Whether it’s a regular <strong>tiffin service</strong> service or a quick <strong>snacks</strong>, I try to make sure every plate is worth the time and money people spend on it.
          Feeding people brings me peace, and I try to do it with honesty and consistency.
        </p>
      </div>

      <div className="abt-gifs">
        <img src={vpGif} alt="Serving Food" className="gif-img" />
        <img src={tiffinGif} alt="Tiffin Box" className="gif-img" />
      </div>
    </div>
  );
}

export default About;