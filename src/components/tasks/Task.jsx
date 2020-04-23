import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";

function Task({ task: { name, complete, id } }) {
  const { setDeleteTask } = useContext(taskContext);

  const handleDeleTask = (id) => {
    setDeleteTask(id);
  };

  return (
    <li className="tarea sombra">
      <p>{name} </p>

      <div className="estado">
        {complete ? (
          <button
            type="button"
            className="completo"
            // onClick={() => cambiarEstado(tarea)}
          >
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            // onClick={() => cambiarEstado(tarea)}
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
