import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for styling
import youtube_icon from "../../assets/youtube_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
import twitter_icon from "../../assets/twitter_icon.png"; // Add other icons as needed
import instagram_icon from "../../assets/instagram_icon.png"; // Add other icons as needed

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-icons">
        <img src={youtube_icon} />
        <img src={facebook_icon} />
        <img src={twitter_icon} />
        <img src={instagram_icon} />
      </div>
      <ul>
        <li>Audio description</li>
        <li>Help Centre</li>
        <li>Gift cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal notice</li>
        <li>Cookie Preferances</li>
        <li>Corporate Information</li>
        <li>Cotact Us</li>
      </ul>
      <p className="copyright-text">1997-2023 Netflix , Inc.</p>
    </div>
  );
};

export default Footer;
