import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";

function Task({task, task: { name, state, id } }) {
  const { setDeleteTask, setStateTask } = useContext(taskContext);

  const handleDeleTask = (id) => {
    setDeleteTask(id);
  };

  const handleTaskState = () => {
    const newTask = { ...task, state: !task.state}
    setStateTask(newTask);
  };

  return (
    <li className="tarea sombra">
      <p>{name} </p>

      <div className="estado">
        {state ? (
          <button
            type="button"
            className="completo"
            onClick={handleTaskState}
          >
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={handleTaskState}
          >
            Incomplete
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          // onClick={() => seleccionarTarea(tarea) }
        >
          Edit
        </button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => handleDeleTask(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;
