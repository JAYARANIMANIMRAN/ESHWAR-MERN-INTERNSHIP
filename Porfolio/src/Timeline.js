import React from "react";
import "./Timeline.css";
import { FaDownload } from "react-icons/fa"; 

const Timeline = () => {
  const events = [
    {
      year: "2020",
      title: "Secondary School",
      description:
        "Studied at G.G.S.M.M.HR.SEC.SCHOOL, Mayiladuthurai, with an SSLC percentage of 80.72%.",
      file: "/assets/secondary-school-certificate.pdf", 
    },
    {
      year: "2022",
      title: "High School",
      description:
        "Studied at G.G.S.M.M.HR.SEC.SCHOOL, Mayiladuthurai, with an HSC percentage of 87.66%.",
      file: "/assets/high-school-certificate.pdf", 
    },
    {
      year: "2023",
      title: "University",
      description:
        "Currently pursuing B.E in CSE (AI-ML) at Sri Eshwar College of Engineering, Coimbatore with a CGPA of 7.52.",
      file: "/assets/university-certificate.pdf", 
    },
  ];

  return (
    <div className="timeline-container" id="education">
      <div className="timeline-title">Education</div>
      <div className="timeline">
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <h3>{event.year}</h3>
              <h4>
                {event.title}
                <a
                  href={event.file}
                  download
                  className="download-icon"
                  title={`Download ${event.title} Certificate`} 
                  aria-label={`Download ${event.title} Certificate`} 
                >
                  <FaDownload />
                </a>
              </h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
