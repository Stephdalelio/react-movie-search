import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav>
          <div className="nav__container">
            <Link to="/" className="logo__link">
              <div className="nav__logo">
                <h1>
                  Movie<span className="red">Night</span>
                </h1>
              </div>
            </Link>
            <ul className="nav__links">
              <li className="nav__list">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li className="nav__list">
                <Link to="/" className="nav__link nav__list-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    };

export default Nav;