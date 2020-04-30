import {
  GET__PROJECTS,
  GET__PROJECTS__ERROR,
  SHOW__PROJECT,
  ADD__PROJECT,
  ADD__PROJECT__ERROR,
  VALIDATE__FORM,
  CURRENT__PROJECT,
  DELETE__PROJECT,
  DELETE__PROJECT__ERROR,
  RESET__PROJECT__STATE,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case GET__PROJECTS:
      return {
        ...state,
        projects: action.payload,
        projectsError: false,
      };

    case GET__PROJECTS__ERROR:
      return {
        ...state,
      };

    case SHOW__PROJECT:
      return {
        ...state,
        showProject: action.payload,
      };

    case ADD__PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        showProject: false,
        errorForm: false,
      };

    case ADD__PROJECT__ERROR:
      return {
        ...state,
        errorForm: { msg: action.payload },
      };

    case VALIDATE__FORM:
      return {
        ...state,
        errorForm: { msg: action.payload },
      };

    case CURRENT__PROJECT:
      return {
        ...state,
        currentProject: action.payload,
      };

    case DELETE__PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.name !== action.payload.name
        ),
        currentProject: null,
        deleteProject: !state.deleteProject,
      };

    case DELETE__PROJECT__ERROR:
      return {
        ...state,
        projectsError: true,
      };

    case RESET__PROJECT__STATE:
      return {
        showProject: false,
        projects: null,
        projectsError: false,
        errorForm: false,
        currentProject: null,
      };

    default:
      return state;
  }
};
