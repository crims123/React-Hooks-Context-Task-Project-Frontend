import React from "react";
import Project from "./Project";

const ProjectsListMock = [
  {
    name: "Virtual Store",
  },
  { name: "Website Design" },
  { name: "Intranet" },
];

function ProjectsList() {
  return (
    <ul className="listado-proyectos">
      {ProjectsListMock.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </ul>
  );
}

export default ProjectsList;
