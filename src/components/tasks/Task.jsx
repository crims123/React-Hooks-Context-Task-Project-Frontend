import React, { useContext } from 'react';
import taskContext from '../../context/tasks/taskContext';

function Task({ task, task: { name, state, _id } }) {
  const { setDeleteTask, setStateTask, setSelectedTask } = useContext(
    taskContext
  );

  const handleEditTask = () => {
    setSelectedTask(task);
  };

  const handleDeleTask = () => {
    setDeleteTask(_id);
  };

  const handleTaskState = () => {
    const newTask = { ...task, state: !task.state };
    setStateTask(newTask);
  };

  return (
    <li className="task shadow">
      <p>{name} </p>

      <div className="state">
        {state ? (
          <button type="button" className="complet" onClick={handleTaskState}>
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="incomplet"
            onClick={handleTaskState}
          >
            Incomplete
          </button>
        )}
      </div>

      <div className="actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleEditTask}
        >
          Edit
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleDeleTask}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;
