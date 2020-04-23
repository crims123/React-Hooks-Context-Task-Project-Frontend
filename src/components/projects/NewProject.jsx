import React, { Fragment, useState } from "react";
import useInput from "../../hooks/useInput";

function NewProject() {
  const [newProject, setNewProject] = useState(false);
  const [value, handleChange] = useInput({
    name: "",
  });

  const handleClickNewProject = () => {
    setNewProject(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setNewProject(false);
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={handleClickNewProject}
      >
        New Project
      </button>

      {newProject ? (
        <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Project Name"
            name="name"
            onChange={handleChange}
          />

          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Add Project"
          />
        </form>
      ) : null}

      {/* {errorformulario ? (
        <p className="mensaje error">El nombre del Proyecto es obligatorio</p>
      ) : null} */}
    </Fragment>
  );
}

export default NewProject;
