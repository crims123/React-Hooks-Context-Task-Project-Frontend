import React, { useReducer } from 'react';
import projectContext from '../../context/projects/projectContext';
import projectReducer from '../../reducers/projects/projectReducer';
import axiosClient from '../../config/api';
import {
  SHOW__PROJECT,
  ADD__PROJECT,
  ADD__PROJECT__ERROR,
  VALIDATE__FORM,
  CURRENT__PROJECT,
  DELETE__PROJECT,
} from '../../types';

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
      type: SHOW__PROJECT,
      payload: value,
    });
  };

  const setAddProject = async (values) => {
    try {
      const project = await axiosClient.post('/api/projects', values);

      dispatch({
        type: ADD__PROJECT,
        payload: project.data.data.project,
      });
    } catch (error) {
      dispatch({
        type: ADD__PROJECT__ERROR,
        payload: error,
      });
    }
  };

  const setErrorForm = (msg) => {
    dispatch({
      type: VALIDATE__FORM,
      payload: msg,
    });
  };

  const setCurrentProject = (project) => {
    dispatch({
      type: CURRENT__PROJECT,
      payload: project,
    });
  };

  const setDeleteProject = (project) => {
    dispatch({
      type: DELETE__PROJECT,
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
