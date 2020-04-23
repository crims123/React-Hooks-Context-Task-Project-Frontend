import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

function Project({ project, project: { name } }) {
  const { setCurrentProject } = useContext(projectContext);
  const { setProjectTasks } = useContext(taskContext);

  const handleClick = () => {
    setCurrentProject(project);
    setProjectTasks(project);
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
