import React, {useContext} from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";

function ProjectsList() {
  const { projects } = useContext(projectContext);

  if(projects.length === 0) return <p>No Projects add One</p>
  
  return (
    <ul className="listado-proyectos">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </ul>
  );
}

export default ProjectsList;
