import React from "react";

function TextSide(props) {
  return (
    <div className="text-side col-xs-12 col-md-6">
      <h2>Hey, I'm Seif</h2>
      <p>
        Front End Developer and computer science student who loves building
        fully responsive websites and helping businesses to present online
      </p>
      <div className="btn-wrapper">
        <a href="#projects-gallary" className="home-btn">
          Veiw Projects
        </a>
        <a href="#contact" className="home-btn">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default TextSide;
