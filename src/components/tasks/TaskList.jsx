import React, { Fragment, useContext } from 'react';
import Task from './Task';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

function TaskList() {
  const { currentProject, setDeleteProject } = useContext(projectContext);
  const { projectTasks: tasks } = useContext(taskContext);

  const handleClick = () => {
    setDeleteProject(currentProject);
  };

  return (
    <Fragment>
      {currentProject ? (
        <Fragment>
          <h2>Project: {currentProject.name}</h2>
          <ul className="listado-tareas">
            {tasks.length === 0 ? (
              <li className="tarea">
                <p>No tasks</p>
              </li>
            ) : (
              <TransitionGroup>
                {tasks.map((task, index) => (
                  <CSSTransition key={index} timeout={200} classNames="tarea">
                    <Task task={task} />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            )}
          </ul>

          <button
            type="button"
            className="btn btn-eliminar"
            onClick={handleClick}
          >
            Delete Project &times;
          </button>
        </Fragment>
      ) : (
        <h2>Select Project</h2>
      )}
    </Fragment>
  );
}

export default TaskList;
