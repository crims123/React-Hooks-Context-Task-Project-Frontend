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
            }
    default:
      return state;
  }
};
