import React, { Fragment, useState, useContext } from "react";
import useInput from "../../hooks/useInput";
import projectContext from "../../context/projects/projectContext";

function NewProject() {
  const { showProject, setShowProject, setAddProject } = useContext(projectContext);
  
  const [value, handleChange] = useInput({
    name: "",
  });

  const handleClickNewProject = () => {
    setShowProject(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddProject(value)
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

      {showProject ? (
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
