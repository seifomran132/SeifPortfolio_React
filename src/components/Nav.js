import React from "react";
import { Link } from "react-router-dom";
import '../style/css/navbar.css'

function Nav(props) {
  return (
    <nav>
      <div className="logo">
        <h2>
          <Link to="/">Seif Omran</Link>
        </h2>
      </div>
      <div className="main-menu-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/testinomials">Testinomials</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
