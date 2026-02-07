import React from "react";
import { Nav } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function navBar() {
  return (
    <>
      <div className="sidebar d-none d-lg-block text-light mt-2">
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
    </>
  );
}

export default navBar;
