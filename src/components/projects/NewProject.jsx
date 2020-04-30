import React, { Fragment, useContext } from 'react';
import useInput from '../../hooks/useInput';
import projectContext from '../../context/projects/projectContext';

function NewProject() {
  const {
    showProject,
    setShowProject,
    setAddProject,
    errorForm,
    setErrorForm,
  } = useContext(projectContext);

  const [value, handleChange, setValues] = useInput({
    name: '',
  });

  const handleClickNewProject = () => {
    setShowProject(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.name) {
      setErrorForm('The Project name is mandatory');
    } else {
      setAddProject({ ...value });
      e.target.reset();
      setValues({ name: '' });
    }
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

      {errorForm ? <p className="mensaje error">{errorForm.msg}</p> : null}
    </Fragment>
  );
}

export default NewProject;
