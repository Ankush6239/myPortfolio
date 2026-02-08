import React from "react";

function Experience() {
  return (
    <>
      <div>
        <section className="skills" id="experience">
          <div className="container">
            <h2 className="section-title">Experience:</h2>
            <div className="skills-list p-3">
              <div className="container">
                <h4 className="fw-bold">
                  <i class="bi bi-code-slash"></i> Front-End Developer
                </h4>
                <div className="row display-flex">
                  <div className="col-lg-6 col-sm-12 col-md-6 pt-2 pb-2">
                    <h5 className="fw-bold">
                      Co.Mayassar Services Private Limited – Mohali, Punjab
                    </h5>
                    <div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          Developed responsive and interactive user interfaces
                          using React.js
                        </li>
                        <li class="list-group-item">
                          Improved user satisfaction through clean HTML & CSS
                          layouts
                        </li>
                        <li class="list-group-item">
                          Used npm packages to speed up development workflow
                        </li>
                        <li class="list-group-item">
                          Implemented React Router for smooth navigation
                        </li>
                        <li class="list-group-item">
                          Built and managed websites using WordPress CMS
                        </li>
                        <li class="list-group-item">
                          Created modern UI designs using HTML, CSS, and
                          JavaScript
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-md-6 pt-2 pb-2">
                    <h5 className="fw-bold ">
                      Co.Team Cowork – Gurgaon Sec-16, Haryana
                    </h5>
                    <div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          Built an SEO-focused Admin Panel using HTML, CSS, and
                          Next.js
                        </li>
                        <li class="list-group-item">
                          Developed a Leaderboard Dashboard using Python &
                          Django
                        </li>
                        <li class="list-group-item">
                          Worked on AWS EC2 deployment to make websites live
                        </li>
                        <li class="list-group-item">
                          Implemented server-side rendering for better
                          performance
                        </li>
                        <li class="list-group-item">
                          Designed responsive WordPress websites as per client
                          needs
                        </li>
                        {/* <li class="list-group-item"></li>
                        <li class="list-group-item"></li>
                        <li class="list-group-item"></li>
                        <li class="list-group-item"></li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row display-flex pt-2">
                  <h4 className="fw-bold">
                    <i class="bi bi-folder-check"></i> Projects:
                  </h4>
                  <div className="col-lg-6 col-sm-12 col-md-6 pt-2">
                    <h5 className="fw-bold">
                      <i class="bi bi-speedometer2"></i> Admin Panel (Next.js)
                    </h5>
                    <p className="ps-4">
                      SEO-optimized admin dashboard for efficient content and
                      performance management.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-md-6 pt-2">
                    {" "}
                    <h5 className="fw-bold">
                      <i class="bi bi-trophy"></i> Leaderboard Dashboard (Python
                      + Django)
                    </h5>
                    <p className="ps-4">
                      Dynamic ranking system to manage and display leaderboard
                      data.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-md-6 pt-2">
                    {" "}
                    <h5 className="fw-bold">
                      <i class="bi bi-window"></i> React Websites
                    </h5>
                    <p className="ps-4">
                      Modern, responsive UI designs with smooth navigation and
                      reusable components.
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-12 col-md-6 pt-2">
                    {" "}
                    <h5 className="fw-bold">
                      <i class="bi bi-wordpress"></i> WordPress Websites
                    </h5>
                    <p className="ps-4">
                      Custom themes and plugins tailored to client requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Experience;
