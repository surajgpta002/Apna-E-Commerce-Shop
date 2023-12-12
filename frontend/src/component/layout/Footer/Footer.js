import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download App Here</h4>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Apna E Commerce Shop</h1>
        <p>High Quality is our First Priority</p>

        <p>Copyrights 2023 &copy; srkian_suraj</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/srkian_suraj/" target="blank">
          Instagram
        </a>
        <a href="https://www.linkedin.com/in/surajgupta02/" target="blank">
          Linkedin
        </a>
        <a href="https://github.com/surajgpta002" target="blank">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
