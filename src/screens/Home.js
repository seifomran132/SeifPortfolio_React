import React from "react";
import Nav from "../components/Nav";
import HomeInfo from "../components/HomeInfo/HomeInfo";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Testinomials from "../components/testinomials/Testinomials";
import Contact from "../components/contact/Contact";

import "../style/css/home.css";

function Home(props) {
  let myDate = new Date()
  return (
    <div className="home-screen">
      <div className="container">
        <Nav></Nav>
        <HomeInfo />
      </div>
      <About />
      <Projects />
      <Testinomials/>
      <Contact/>
      <footer>
        
        <p class="credit">All rights reserved Seif.work &copy; {myDate.getFullYear()}</p>
      </footer>
    </div>
  );
}

export default Home;
