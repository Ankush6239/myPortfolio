import React from "react";
import profile from "../assets/img/hero-bg-a.jpeg"
function About() {
  return (
    <section className="about" id="about">
      <div className="container mt-5 mb-5">
        <h2 className="section-title">About Me</h2>
        <p className="about-description pb-1">
          I’m a detail-oriented Front-End Developer with 2 year of hands-on
          experience in building responsive websites and web applications.
        </p>
          <p className="about-description pb-1">
          I specialize in React.js, JavaScript, and modern UI development, and
          I’ve also worked with WordPress for CMS-based websites.
        </p>
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-4 justify-content-center d-flex">
              <img
                src={profile}
                alt="Brand Logo"
                className="img-fluid  aboutImg"
              />
            </div>
            <div className="col-lg-8">
              <div className="container">
                <div className="row pt-3">
                  <div className="col">
                    <ul>
                      <li>
                        <span className="greaterThen">
                          <i class="bi bi-chevron-right"></i>
                        </span>
                        <span className="fw-bold">Birthday :&nbsp;</span>
                        05/05/2002
                      </li>
                       <li>
                        <span className="greaterThen">
                          <i class="bi bi-chevron-right"></i>
                        </span>
                        <span className="fw-bold">website :&nbsp;</span>
                        
                      </li>
                       <li>
                        <span className="greaterThen">
                          <i class="bi bi-chevron-right"></i>
                        </span>
                        <span className="fw-bold">Phone :&nbsp;</span>
                        6239736671
                      </li>
                       <li>
                        <span className="greaterThen">
                          <i class="bi bi-chevron-right"></i>
                        </span>
                        <span className="fw-bold">City :&nbsp;</span>
                        (Sujanpur), Pind-Code: 145023
                      </li>
                    </ul>
                  </div>
                  <div className="col"><ul>
                      <li>
                        <span className="greaterThen">
                          <i class="bi bi-chevron-right"></i>
                        </span>
                        <span className="fw-bold">Age :&nbsp;</span>
                        23
                      </li>
                       <li>
                        <span className="greaterThen">
                          <i class="bi bi-chevron-right"></i>
                        </span>
                        <span className="fw-bold">Degree :&nbsp;</span>
                        Bachelor of Computer Applications (BCA)
                      </li>
                       <li>
                        <span className="greaterThen">
                          <i class="bi bi-chevron-right"></i>
                        </span>
                        <span className="fw-bold">Email : &nbsp;</span>
                        aryaankush205@gmail.com
                      </li>
                       <li>
                        <span className="greaterThen">
                          <i class="bi bi-chevron-right"></i>
                        </span>
                        <span className="fw-bold">Freelance :&nbsp;</span>
                        Available
                      </li>
                    </ul>
                    </div>
                    <p className="about-description pb-1">
          I love learning new technologies, improving performance, and creating
          smooth user experiences. My goal is to grow as a developer while
          contributing to impactful and innovative projects.
        </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;
