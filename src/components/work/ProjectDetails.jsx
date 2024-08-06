import React from 'react';

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      {/* add more details about the project here */}
    </div>
  );
};

export default ProjectDetails;