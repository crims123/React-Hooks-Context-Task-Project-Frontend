import React, { useReducer } from "react";
import projectContext from "../../context/projects/projectContext";
import projectReducer from "../../reducers/projects/projectReducer";

function ProjectStore(props) {
  const initialState = {
    showProject: false,
    projects: [],
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const setShowProject = (value) => {
    dispatch({
      type: "SHOW__PROJECT",
      payload: value
    });
  };

  const setAddProject = (project) => {
    // Insert project to local State
    dispatch({
      type: "ADD__PROJECT",
      payload: project
    });
  };


  return (
    <projectContext.Provider
      value={{
        showProject: state.showProject,
        setShowProject,
        projects: state.projects,
        setAddProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
}

export default ProjectStore;
