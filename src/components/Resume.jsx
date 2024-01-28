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
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2018 - 2021",
      title: "Bicultural High School Diploma",
      place: "Instituto Tecnológico y de Estudios Superiores de Monterrey",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "2009 - 2012",
      title: "Master Degree",
      place: "Harvard University",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
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
      yearRange: "Dec 2023 - Present",
      title: "Freelance Software Engineer",
      place: "Scale AI",
      src: "images/logos/scaleai.jpg",
      keypoints: "Improving the performance of LLMs by providing full-stack, troubleshooting and deployment solutions to miscellaneous prompts, developing and testing in different frameworks and programming languages.",
      desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      yearRange: "Aug 2023 - Present",
      title: "Software Engineer - AI Integration",
      place: "Ixmatix Robotics",
      src: "images/logos/ixmatix.jpg",
      keypoints: "Developed a real-time voice assistant in Python and Elixir using APIs: OpenAI for response generation, Google Cloud speech recognition, and ElevenLabs speech generation. Increasing user engagement by 60%. Optimized response time with chunked transfer encoding and multithreading.\n\nIntegrated Google Docs API to ease the review of the content generated dynamically with Generative AI in Node JS, formatted for interactive h5p content. Content creation efficiency was improved by 50%.",
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
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
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
                  </div>
                </div>
              ))}
          </div></div>
        </div>
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
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
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
