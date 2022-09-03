import React from "react";
import Nav from "../components/Nav";
import HomeInfo from "../components/HomeInfo/HomeInfo";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";

import "../style/css/home.css";

function Home(props) {
  return (
    <div className="home-screen">
      <div className="container">
        <Nav></Nav>
        <HomeInfo />
      </div>
      <About />
      <Projects />
    </div>
  );
}

export default Home;
