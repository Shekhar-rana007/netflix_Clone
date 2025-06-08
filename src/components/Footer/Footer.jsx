import React from "react";
import "./Footer.css";
import youtube from "../../assets/youtube_icon.png";
import twitter from "../../assets/twitter_icon.png";
import instagram from "../../assets/instagram_icon.png";
import facebook from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube} alt="YouTube icon" />
        <img src={instagram} alt="Instagram icon" />
        <img src={twitter} alt="Twitter icon" />
        <img src={facebook} alt="Facebook icon" />
      </div>
      <ul className="footer-links">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investors Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Centre</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright">© 1997–2025 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
