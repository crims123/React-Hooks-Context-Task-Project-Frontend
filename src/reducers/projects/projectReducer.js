export default (state, action) => {
  switch (action.type) {
    case "SHOW__PROJECT":
      return {
        ...state,
        showProject: action.payload,
      };
    case "ADD__PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
        showProject: false,
        errorForm: false,
      };
    case "VALIDATE__FORM":
      return {
        ...state,
        errorForm: true,
      };
    case "CURRENT__PROJECT":
      return {
        ...state,
        currentProject: action.payload,
      };
    case "DELETE__PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.name !== action.payload.name
        ),
        currentProject: null,
      };
    default:
      return state;
  }
};
