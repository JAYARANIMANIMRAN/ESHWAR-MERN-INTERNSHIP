import React from "react";
import "./Projects.css";
import disasterImage from "./images/disasterimg.jpg";
import learningImage from "./images/learningimg.jpg";
import EnerlexImage from "./images/enerluximg.jpg";  

const projects = [
  {
    id: 1,
    title: "Enerlex",
    image: EnerlexImage, 
    description: "An Energy Efficiency Management System using LSTM predicts energy consumption in residential buildings by analyzing usage patterns and external factors. It helps optimize energy usage, reduce wastage, and lower costs effectively.",
    github: "https://github.com/project-one",
    demo: "https://live-demo-one.com"
  },
  {
    id: 2,
    title: "Real-time Disaster Management System",
    image: disasterImage, 
    description: "A Real-Time Disaster Management System collects and analyzes live data from sources like social media, news, and sensors to provide timely updates. It helps agencies coordinate responses, minimize damage, and ensure public safety during disasters.",
    github: "https://github.com/project-two",
    demo: "https://live-demo-two.com"
  },
  {
    id: 3,
    title: "Online Learning Platform",
    image: learningImage,
    description: "An online learning platform offers flexible, accessible education through virtual courses, interactive content, and assessments. It connects learners with diverse resources and expert instructors anytime, anywhere.",
    github: "https://github.com/project-three",
    demo: "https://live-demo-three.com"
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <img src={project.image} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="buttons">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <button>Live Demo</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
