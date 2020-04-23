import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

function Project({ project, project: { name } }) {
  const { setCurrentProject } = useContext(projectContext);

  const handleClick = () => {
    setCurrentProject(project);
  };

  return (
    <li>
      <button onClick={handleClick} type="button" className="btn btn-blank">
        {name}
      </button>
    </li>
  );
}

export default Project;
