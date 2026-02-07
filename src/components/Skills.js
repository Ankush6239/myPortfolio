import React from "react";

function skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-list p-3">
          <h5 className="skill-name fw-bold ps-4">
            <i class="bi bi-code-slash"></i> Technical Skills
          </h5>
          <div className=" container skill-item">
            <div>
              <h5 className="skill-name fw-bold pt-2 ps-4">
                <i class="bi bi-translate"></i> Languages:
              </h5>
              <div class="row skills-wrapper">
                <div class=" col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-filetype-html"></i> HTML5
                    </span>
                    <span>100%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "100%" }}></div>
                  </div>
                </div>

                <div class=" col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-filetype-css"></i> CSS3
                    </span>
                    <span>90%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div class="col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-filetype-js"></i> JavaScript
                    </span>
                    <span>75%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "75%" }}></div>
                  </div>
                </div>

                <div class=" col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-filetype-py"></i> Python
                    </span>
                    <span>80%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="skill-name fw-bold pt-2 ps-4">
                <i class="bi bi-boxes"></i> Frameworks & Libraries:
              </h5>
              <div class="row skills-wrapper">
                <div class="col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-arrow-repeat"></i> React.js
                    </span>
                    <span>90%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div class=" col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-lightning-charge"></i> Next.js
                    </span>
                    <span>55%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "55%" }}></div>
                  </div>
                </div>
                <div class=" col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-server"></i> Django
                    </span>
                    <span>55%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "55%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="skill-name fw-bold pt-2 ps-4">
                <i class="bi bi-palette"></i> Styling:
              </h5>
              <div class="row skills-wrapper">
                <div class="col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-bootstrap"></i> Bootstrap
                    </span>
                    <span>90%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div class=" col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-wind"></i> Tailwind CSS
                    </span>
                    <span>55%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "55%" }}></div>
                  </div>
                </div>
                <div class=" col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-phone"></i>Media Queries
                    </span>
                    <span>55%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "55%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="skill-name fw-bold pt-2 ps-4">
                <i class="bi bi-kanban"></i> Content management system:
              </h5>
              <div class="row skills-wrapper">
                <div class="col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-wordpress"></i> WordPress / CMS
                    </span>
                    <span>90%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="skill-name fw-bold pt-2 ps-4">
                {" "}
                <i class="bi bi-git"></i> Version Control:
              </h5>
              <div class="row skills-wrapper">
                <div class="col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      {" "}
                      <i class="bi bi-git"></i> Git
                    </span>
                    <span>90%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>

                <div class="col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-github"></i> GitHub
                    </span>
                    <span>90%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="skill-name fw-bold pt-2 ps-4">
                {" "}
                <i class="bi bi-diagram-2"></i> APIs:
              </h5>
              <div class="row skills-wrapper">
                <div class="col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-diagram-3"></i> REST APIs
                    </span>
                    <span>90%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="skill-name fw-bold pt-2 ps-4">
                <i class="bi bi-tools"></i> Tools:
              </h5>
              <div class="row skills-wrapper">
                <div class="col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-code-square"></i> VS Code
                    </span>
                    <span>90%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-box-seam"></i> NPM
                    </span>
                    <span>90%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="skill-name fw-bold pt-2 ps-4">
                <i class="bi bi-cloud-upload"></i> Deployment:
              </h5>
              <div class="row skills-wrapper">
                <div class="col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-cloud"></i> AWS EC2
                    </span>
                    <span>90%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12 col-md-6 skill">
                  <div class="skill-title">
                    <span>
                      <i class="bi bi-server"></i> Server-Side Rendering
                    </span>
                    <span>90%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" style={{ width: "90%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default skills;
