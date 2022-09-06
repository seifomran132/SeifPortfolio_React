import React from "react";
import { Link, NavLink } from "react-router-dom";
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
            <NavLink to="/" className={({isActive})=>(isActive ? 'active-nav' : '')}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive})=>(isActive ? 'active-nav' : '')}>About</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({isActive})=>(isActive ? 'active-nav' : '')}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/testinomials" className={({isActive})=>(isActive ? 'active-nav' : '')}>Testinomials</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive})=>(isActive ? 'active-nav' : '')}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
