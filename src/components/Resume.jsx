import React, { useEffect, useRef, useState } from "react";
import resumeFile from "../documents/resume.pdf";
import ExperienceDetailsModal from "./ExperienceDetailsModal";

const Resume = ({ classicHeader, darkTheme }) => {
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedExperienceDetails, setSelectedExperienceDetails] = useState();
  const educationDetails = [
    {
      yearRange: "2021 - 2025",
      title: "B.S. in Mechatronics Engineering",
      place: "Instituto Tecnológico y de Estudios Superiores de Monterrey",
      src: "images/logos/tec.png",
      desc: "Academic Scolarship holder, Robotics Research Team, Smart Factory. Relevant Coursework: Programming of Data Structures and Fundamental Algorithms, Object-Oriented Programming, Multi-Agent Systems with Computer Graphics, Industrial Automation",
    },
    {
      yearRange: "2018 - 2021",
      title: "Bicultural High School Diploma",
      place: "Instituto Tecnológico y de Estudios Superiores de Monterrey",
      src: "images/logos/tec.png",
      desc: "FIRST Robotics Competition Alumni, Academic honorific mention, Leadership 'Borrego de Oro' winner. Relevant Coursework: CS50, AP Calculus, AP English",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "Jun 2024 - Sep 2024",
      title: "Incoming Software Engineer Intern",
      place: "Google - Cloud Vertex AI",
      src: "images/logos/google.jpg",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "Aug 2023 - Present",
      title: "Software Engineer - AI Integration",
      place: "Ixmatix Robotics",
      src: "images/logos/ixmatix.jpg",
      keypoints: "Developing AI features with Python and Elixir for the company's math learning platform, including a dynamic content generator and a real-time voice assistant tutor. Implementing Generative AI, Text-to-Speech and Speech generation models through APIs (OpenAI, Azure, ElevenLabs).",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "Dec 2023 - Present",
      title: "Freelance Software Engineer",
      place: "Scale AI",
      src: "images/logos/scaleai.jpg",
      keypoints: "Improving the performance of LLMs by providing full-stack, troubleshooting and deployment solutions to miscellaneous prompts, developing and testing in different frameworks and programming languages.",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "Jan 2023 - Nov 2023",
      title: "Robotics Engineer & PM Intern",
      place: "ITESM - Smart Factory",
      src: "images/logos/smart_factory.jpg",
      keypoints: "Leading the development of a Cyber-Physical factory currently used by undergrad students and as a research project. Managing and assigning tasks to other interns in Automation, Robotics, VR and Computer vision.",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];

  const skills = [
    {
      name: "Web Design",
      percent: 65,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Angular Js",
      percent: 60,
    },
    {
      name: "Bootstrap",
      percent: 99,
    },
  ];

  return (
    <>
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-2" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-12">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <img
                      className="img-fluid rounded-circle border d-inline-block w-auto"
                      src={value.src}
                      alt=""
                      style={{ width: "50px", height: "50px"}}
                    />
                    <p className="ms-3 mb-0">
                        <p className="badge bg-primary text-2 fw-400">
                          {value.yearRange}
                        </p>
                        <h5 className={darkTheme ? "text-primary" : "text-danger"}>
                          {value.place}
                        </h5>
                    </p>
                  </div>
                        <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                          {value.title}
                        </h3>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="row gx-5">
          {/* My Experience */}
          <div className="portfolio popup-ajax-gallery">
          <div className="col-md-12">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <img
                      className="img-fluid rounded-circle border d-inline-block w-auto"
                      src={value.src}
                      alt=""
                      style={{ width: "50px", height: "50px"}}
                    />
                    <p className="ms-3 mb-0">
                        <p className="badge bg-primary text-2 fw-400">
                          {value.yearRange}
                        </p>
                        <h5 className={darkTheme ? "text-primary" : "text-danger"}>
                          {value.place}
                        </h5>
                    </p>
                  </div>
                        <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                          {value.title}
                        </h3>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.keypoints}
                  </p>
                  {/* Details button */}{/*
                  <div className="portfolio-box-rounded">
                    <button className="btn btn-primary btn-rounded btn-sm shadow-none mb-3" style={{position: "relative" }}>
                      expand
                    <a
                      className="popup-ajax stretched-link"
                      href=""
                      onClick={() => {
                        setSelectedExperienceDetails(experienceDetails[index]);
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#expModal"
                    />
                    </button>
                    </div>*/}
                </div>
              ))}
          </div>
        </div>


        <div className="row gx-5">
          <div className="portfolio popup-ajax-gallery">
          <div className="col-md-12">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Skills
            </h2>
                <div
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                        <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                        Programming Languages
                        </h3>
                        <br></br>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")} align="left">
                    <a href="https://skillicons.dev">
                      <img src="https://skillicons.dev/icons?i=cpp,py,java,js,cs,c,elixir,latex,matlab,php"/>
                    </a>
                  </p>
                </div>
                <div
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                        <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                        Technologies
                        </h3>
                        <br></br>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")} align="left">
                    <a href="https://skillicons.dev">
                      <img src="https://skillicons.dev/icons?i=ros,opencv,gcp,tensorflow,unity,sklearn,pytorch,git,docker,linux,arduino,raspberrypi,html,laravel,anaconda,blender,powershell,vscode"/>
                    </a>
                  </p>
                </div>
              </div>
            </div>
        </div>


        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={"/Adan_Flores_resume.pdf"}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
      <div className="experience-details-modal">
        {/* Modal */}
        <ExperienceDetailsModal
          experienceDetails={selectedExperienceDetails}
          darkTheme={darkTheme}
        ></ExperienceDetailsModal>
      </div>
    </>
  );
};

export default Resume;
