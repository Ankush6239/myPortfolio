import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Navigation from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Nav } from "react-bootstrap";
import Experience from "./components/Experience";
import Education from "./components/Education";
function App() {
  return (
    <div className="container-fluid">
      <div className="row display-flex">
        <div className="col-4 position-sticky top-0 vh-100 w-auto left-0 p-0 m-0">
          <Navigation />
        </div>
        <div className="col p-0 m-0">
          <div className="main-content">
            <div className="d-lg-none">
              <button
                className="btn btn-primary d-block d-lg-none small-screen-button"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#staticBackdrop"
                aria-controls="staticBackdrop"
              >
                <i class="bi bi-list"></i>
              </button>

              <div
                className="offcanvas offcanvas-start d-block d-lg-none bg-dark "
                data-bs-backdrop="static"
                tabindex="-1"
                id="staticBackdrop"
                aria-labelledby="staticBackdropLabel"
              >
                <div className="offcanvas-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div>
                    <div className="brand ">
                      <img
                        src="img/hero-bg-a.jpeg"
                        alt="Brand Logo"
                        className="img-fluid rounded-circle   imgSize"
                      />
                    </div>
                    <span>
                      <h2 className="text-white fw-bold mt-3 mb-3 fs-4 text-center">
                        Ankush Arya
                      </h2>
                    </span>
                  </div>
                  <div
                    className="mb-1"
                    style={{
                      display: "flex",
                      gap: "10px",
                      fontSize: "2rem",
                      justifyContent: "center",
                    }}
                  >
                    <i class="bi bi-instagram  bgGround"></i>

                    <i class="bi bi-twitter-x bgGround"></i>

                    <i class="bi bi-github bgGround"></i>

                    <i class="bi bi-linkedin bgGround"></i>

                    <i className="bi bi-facebook bgGround"></i>
                  </div>

                  <Nav className="flex-column mt-4">
                    <Nav.Link href="#hero" className="nav-link ">
                      {" "}
                      <i className="bi bi-house navicon"></i> Home
                    </Nav.Link>
                    <Nav.Link href="#about" className="nav-link">
                      {" "}
                      <i className="bi bi-person navicon"></i> About
                    </Nav.Link>
                    <Nav.Link href="#skills" className="nav-link">
                      {" "}
                      <i className="bi bi-stars navicon"></i> Skills
                    </Nav.Link>

                    <Nav.Link href="#experience" className="nav-link">
                      {" "}
                      <i className="bi bi-briefcase navicon"></i> Experience
                    </Nav.Link>
                    <Nav.Link href="#education" className="nav-link">
                      {" "}
                      <i className="bi bi-book"></i> Education
                    </Nav.Link>
                    <Nav.Link href="#contact" className="nav-link">
                      {" "}
                      <i className="bi bi-envelope navicon"></i> Contact
                    </Nav.Link>
                  </Nav>
                </div>
              </div>
            </div>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Contact />
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
