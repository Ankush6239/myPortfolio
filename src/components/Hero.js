import React from "react";
import { ReactTyped } from "react-typed";



function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="container-fluid p-0 m-0">
        <img
          src="img/hero-bg.jpeg"
          alt="Hero Avatar"
          className="img-fluid w-100 heroImg"
        />

        <div className="hero-text text-center heroText">

          <h1 className="fw-bold display-5">Hello, I'm Ankush Arya</h1>
          <p className="fs-4">
            A Passionate Web Developer
            <br />
            <ReactTyped
              strings={[
                "Frontend Developer",
                "React Enthusiast",
                "UI Designer",
              ]}
              typeSpeed={50}
              backSpeed={40}
              loop
              className=" underline"
            />
          </p>
        </div>
      </div>
    </header>
  );
}

export default Hero;
