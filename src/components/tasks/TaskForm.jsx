import React, { useContext } from "react";
import useInput from "../../hooks/useInput";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

function TaskForm() {
  const { currentProject } = useContext(projectContext);
  const { setAddTask } = useContext(taskContext);
  const [value, handleChange] = useInput({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddTask({ ...value, projectId: currentProject.id, id: Date.now(), complete: false })
  };

  if (!currentProject) return null;

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task Name..."
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            // value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>

      {/* {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null} */}
    </div>
  );
}

export default TaskForm;
