import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    ROBOTICS: "Robotics",
    SOFTWARE: "Software",
    MECHATRONICS: "Mechatronics",
  };

  const projectsData = [
    {
      title: "RoboCup @HOME",
      projectInfo: [
        <> Development of an autonomous service robot with my university's robotics team, which is actively participating in <a href="https://athome.robocup.org" target="_blank" rel="noopener noreferrer">RoboCup @HOME</a> research competition. Capable of listening and responding to commands such as going to a target place or bringing specific objects. Using ROS framework in Nvidia Jetson Xavier. Leading and working on: </>,
        <>● <i>Behavior Integration:</i> Merge of software submodules in a single script (node) to achieve adaptive behaviors.</>,
        <>● <i>Object Detection/Manipulation:</i> MoveIt trajectory planning framework with robot context created using a depth camera to detect collisions, and detections from a YoloV8 model. </>,
        <>● <i>Human-Robot Interaction:</i> Implementation of Whisper and Embeddings to translate speech into robot commands. </>
      ],
      client: "Tecnológico de Monterrey, RoBorregos",
      technologies: "ROS, ROS2, C++, Python, LaTex, OpenAI, MoveIt, Yolo, Nvidia Jetson, PyTorch",
      industry: "Service Robotics",
      date: "January 2023 - Present",
      urls: [ 
        {
          icon: "fa-brands fa-youtube",
          name: "Implementation Video Demo 2023",
          link: "https://drive.google.com/file/d/1GUi6asX8iptuVJpgJzDpP-w_M0vb_3KG/view?usp=sharing",
        },
        {
          icon: "fa-solid fa-newspaper",
          name: "Poster presented at the university's engineering fair",
          link: "https://drive.google.com/file/d/1A98j-gd1dZQqXc6BxjoYxWoXqjLDkyTm/view?usp=sharing"
        },
        {
          icon: "fab fa-github",
          name: "GitHub Repo",
          link: "https://github.com/RoBorregos/robocup-home",
        },
        {
          icon: "fa-solid fa-file",
          name: "Description Paper 2023",
          link: "https://drive.google.com/file/d/1mCu9thW-QwSdetF1R7-NDVVR_-0lcTIj/view?usp=sharing",
        },
      ],
      thumbImage: "images/projects/home-1.png",
      sliderImages: [
        "images/projects/home-2.png",
        "images/projects/home-3.jpeg",
        "images/projects/home-4.jpg",
      ],
      categories: [filters.ROBOTICS],
    },
    {
      title: "IEEE Latin American Robotics Competition",
      projectInfo: [
        <> Creation of an autonomous warehouse mobile robot at scale to compete in the <a href="https://www.cbrobotica.org/index.php/categorias/" target="_blank" rel="noopener noreferrer">IEEE Latin American Robotics Competition Open Challenge</a>, held in Salvador Bahia, Brazil. The challenge, required to develop a robot capable of navigating the environment using 3D computer vision and collecting labeled packages to store them properly. My team and I achieved the first place in this competition.</>,
        <>Leading the software integration and navigation, we developed a stable solution to identify the packages and extract visual odometry from the field using a single stereo camera. The complete software pipeline involved the use of ROS framework in an Nvidia Jetson, the creation of custom low-level synchronous serial communication with a microcontroller, implementation of Visual SLAM algorithms, custom object detection CV models, and behavior integration.</>,
      ],
      client: "Tecnológico de Monterrey, RoBorregos",
      technologies: "ROS, C++, Python, LaTex, Yolo, OpenCV, PCL, OrbSLAM, Nvidia Jetson, Teensy",
      industry: "Warehouse Robotics",
      date: "February 2023 - October 2023",
      urls: [ 
        {
          icon: "fa-solid fa-newspaper",
          name: "Note from the university news site",
          link: "https://conecta.tec.mx/en/news/monterrey/education/repeated-feat-tec-robotics-team-comes-first-brazilian-competition"
        },
        {
          icon: "fab fa-github",
          name: "GitHub Repo",
          link: "https://github.com/RoBorregos/LARC-2023/tree/localization"
        },
        {
          icon: "fa-solid fa-file",
          name: "Description Paper",
          link: "https://drive.google.com/file/d/1s7HFN_S46B7Fs3DTkdvlC7ujkVxNHRhy/view?usp=sharing"
        },
      ],
      thumbImage: "images/projects/larc-1.jpg",
      sliderImages: [
        "images/projects/larc-2.jpg",
        "images/projects/larc-3.png",
        "images/projects/larc-4.jpg",
        "images/projects/larc-5.jpg",
      ],
      categories: [filters.ROBOTICS],
    },
    {
      title: "STM32 Based Autonomous Car",
      projectInfo: [
        <>University's project for the Industrial Automation class of the 5th semester of the Mechatronics Engineering degree. Using an STM32f103c8t6 board, the deliverable was an autonomous car at scale with Ackerman steering, capable of receiving position commands and coordinates from a Bluetooth device, and executing them with precision.</>,
        <>Two PID controllers were characterized and implemented, for a single DC motor, and for the steering angle. Also, there were integrated IMU, GPS, ultrasonic, and encoder sensors, and a Bluetooth module. My team additionally created a Unity simulation to send and receive coordinates and positions.</>
      ],
      client: "John Deere",
      technologies: "C, STM32CubeIDE, PID Control, SolidWorks, Unity, Additive Manufacturing",
      industry: "Industrial Automation",
      date: "August 2023 - November 2023",
      urls: [ 
        {
          icon: "fab fa-github",
          name: "GitHub Repo main file",
          link: "https://github.com/afr2903/john-deere-sdv/blob/main/sdv.c"
        },
        {
          icon: "fa-solid fa-file",
          name: "Final report",
          link: "https://drive.google.com/file/d/1GDkEPaOw7KDgFyLfbbvv5QoR-i-RSVw7/view?usp=sharing"
        },
        {
          icon: "fa-brands fa-youtube",
          name: "Video Demo",
          link: "https://drive.google.com/file/d/15cb1wvuLQZcpIMNCxgF2n9-tJrYreJf5/view?usp=sharing"
        },
      ],
      thumbImage: "images/projects/stm-1.png",
      sliderImages: [
        "images/projects/stm-2.png",
      ],
      categories: [filters.MECHATRONICS],
    },
    {
      title: "Waste classifier machine",
      projectInfo: [
        <>University's project for the Mechatronic Design class. A project had to be proposed from scratch to help the fullfilment of one of the <a href="https://www.un.org/sustainabledevelopment/en/" target="_blank" rel="noopener noreferrer">UN's Sustainable Development Goals</a>. My team and I proposed a waste classifier machine, capable of identifying and separating plastic, glass, and aluminum using a YoloV8 model trained on a large dataset. </>,
      ],
      client: "ITESM",
      technologies: "Python, Arduino, YoloV8, Tensorflow, Nvidia Jetson, OpenCV, Additive Manufacturing",
      industry: "Product Design",
      date: "October 2023 - November 2023",
      urls: [ 
        {
          icon: "fab fa-github",
          name: "GitHub Repo",
          link: "https://github.com/afr2903/waste-classifier-machine"
        },
        {
          icon: "fa-solid fa-file",
          name: "Final report",
          link: "https://drive.google.com/file/d/1H9mi45AX72vZWb6QSVloAj6BtAsFhQpb/view?usp=sharing"
        },
      ],
      thumbImage: "images/projects/waste-classifier-1.png",
      sliderImages: [
        "images/projects/waste-classifier-2.png",
        "images/projects/waste-classifier-3.png",
      ],
      categories: [filters.MECHATRONICS],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-1" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">{project.categories.join(", ")}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
