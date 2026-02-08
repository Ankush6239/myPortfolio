import React from "react";
import { Nav } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import profile from "../assets/img/hero-bg-a.jpeg";

function navBar() {
  return (
    <>
      <div className="sidebar d-none d-lg-block text-light mt-2">
        <div className="brand ">
          <img
            src={profile}
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
          <a
          href="https://www.instagram.com/_ankit_js6239?igsh=dWJ3YWhrZGp6dGxi"
          target="blank"
            reel="noopener noreferrer"
            className="text-decoration-none"
          >
 <i class="bi bi-instagram  bgGround"></i>
          </a>
         
           <a 
           href="https://x.com/Ankush6239"
           target="blank"
            reel="noopener noreferrer"
            className="text-decoration-none"
           ><i class="bi bi-twitter-x bgGround"></i></a>
          

          <a
            href="https://github.com/Ankush6239"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <i className="bi bi-github bgGround"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ankush-arya-b667a629b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="blank"
            reel="noopener noreferrer"
            className="text-decoration-none"
          >
            {" "}
            <i class="bi bi-linkedin bgGround"></i>
          </a>

          <a
            href="https://www.facebook.com/share/1CDxkporVb/"
            target="blank"
            reel="noopener noreferrer"
            className="text-decoration-none"
          ><i className="bi bi-facebook bgGround"></i></a>
          
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
