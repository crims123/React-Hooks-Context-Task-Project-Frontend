import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import userContext from '../../context/users/userContext';

function ProjectsList() {
  const { projects, setGetProjects, projectsError } = useContext(
    projectContext
  );

  const { user } = useContext(userContext);
  useEffect(() => {
    setGetProjects();
    // eslint-disable-next-line
  }, [user]);

  if (projects && projects.length === 0) return <p>No Projects add One</p>;

  if (projectsError) return <p>Error on the server</p>;

  return (
    <ul className="listado-proyectos">
      {projects &&
        projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
    </ul>
  );
}

export default ProjectsList;
