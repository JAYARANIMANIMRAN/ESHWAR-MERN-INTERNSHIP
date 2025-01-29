import React, { useState } from "react";
import { Container, Grid, Paper, Typography, Box, Modal, Backdrop, Fade } from "@mui/material";
import "./Experience.css";

const Experience = () => {
  const [open, setOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const frontendSkills = [
    { skill: "HTML", level: "Experienced", details: "Markup language for creating web pages." },
    { skill: "CSS", level: "Experienced", details: "Style sheet language for designing web pages." },
    { skill: "SASS", level: "Intermediate", details: "CSS preprocessor for better styling options." },
    { skill: "JavaScript", level: "Basic", details: "Programming language for interactive web content." },
    { skill: "TypeScript", level: "Basic", details: "Superset of JavaScript for type safety." },
    { skill: "Material UI", level: "Intermediate", details: "React component library for UI design." },
  ];

  const backendSkills = [
    { skill: "PostgreSQL", level: "Basic", details: "Database system for data management." },
    { skill: "Node JS", level: "Intermediate", details: "JavaScript runtime for server-side programming." },
    { skill: "Express JS", level: "Intermediate", details: "Web framework for Node.js applications." },
    { skill: "Git", level: "Intermediate", details: "Version control system for source code." },
  ];

  const handleOpen = (skill) => {
    setSelectedSkill(skill);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSkill(null);
  };

  return (
    <Container maxWidth="lg" className="experience-container" id="skills"> 
      <Typography variant="h3" align="center" className="experience-title" gutterBottom>
        Explore My Skills
      </Typography>
      <Grid container spacing={4} className="experience-grid">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="experience-paper">
            <Typography variant="h5" gutterBottom>
              Frontend Development
            </Typography>
            {frontendSkills.map((skill) => (
              <Box
                key={skill.skill}
                className="skill-item"
                onClick={() => handleOpen(skill)}
                style={{ cursor: "pointer" }}
                aria-label={`Click to learn more about ${skill.skill} skill`}
              >
                <div className="skill-content">
                  <Typography variant="body1">
                    <span className="skill-name">{skill.skill}:</span>{" "}
                    <span className="skill-level">{skill.level}</span>
                  </Typography>
                </div>
              </Box>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="experience-paper">
            <Typography variant="h5" gutterBottom>
              Backend Development
            </Typography>
            {backendSkills.map((skill) => (
              <Box
                key={skill.skill}
                className="skill-item"
                onClick={() => handleOpen(skill)}
                style={{ cursor: "pointer" }}
                aria-label={`Click to learn more about ${skill.skill} skill`}
              >
                <div className="skill-content">
                  <Typography variant="body1">
                    <span className="skill-name">{skill.skill}:</span>{" "}
                    <span className="skill-level">{skill.level}</span>
                  </Typography>
                </div>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>

      {/* Modal for displaying skill details */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className="modal-paper">
            <Typography variant="h4" gutterBottom>
              {selectedSkill?.skill}
            </Typography>
            <Typography variant="body1">{selectedSkill?.details}</Typography>
            <Typography variant="body2" color="textSecondary">
              Proficiency Level: {selectedSkill?.level}
            </Typography>
          </Paper>
        </Fade>
      </Modal>
    </Container>
  );
};

export default Experience;
