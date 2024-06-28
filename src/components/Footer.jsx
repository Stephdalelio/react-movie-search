import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="row footer__row">
        <div className="container footer__container">
          <div className="nav__logo">
            <h1>
              Movie<span className="red">Night</span>
            </h1>
          </div>
          <p className="footer__p">© 2024 MovieNight</p>
          <div className="footer__socials">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer__social--wrap"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-facebook"
                className="font__icon"
              />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="footer__social--wrap"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-twitter"
                className="font__icon"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="footer__social--wrap"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-github"
                className="font__icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;