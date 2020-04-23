import React, { useReducer } from "react";
import projectContext from "../../context/projects/projectContext";
import projectReducer from "../../reducers/projects/projectReducer";

function ProjectStore(props) {
  const initialState = {
    showProject: false,
    projects: [],
    errorForm: false,
    currentProject: null,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const setShowProject = (value) => {
    dispatch({
      type: "SHOW__PROJECT",
      payload: value,
    });
  };

  const setAddProject = (project) => {
    dispatch({
      type: "ADD__PROJECT",
      payload: project,
    });
  };

  const setErrorForm = () => {
    dispatch({
      type: "VALIDATE__FORM",
    });
  };

  const setCurrentProject = (project) => {
    dispatch({
      type: "CURRENT__PROJECT",
      payload: project,
    });
  };

  const setDeleteProject = (project) => {
    dispatch({
      type: "DELETE__PROJECT",
      payload: project,
    });
  };

  return (
    <projectContext.Provider
      value={{
        showProject: state.showProject,
        setShowProject,
        projects: state.projects,
        setAddProject,
        errorForm: state.errorForm,
        setErrorForm,
        currentProject: state.currentProject,
        setCurrentProject,
        setDeleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
}

export default ProjectStore;
