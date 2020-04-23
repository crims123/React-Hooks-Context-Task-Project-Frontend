export default (state, action) => {
  switch (action.type) {
    case "ADD__TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        projectTasks: [...state.projectTasks, action.payload],
        errorForm: false,
      };

    case "FILTER__PROJECT__TASK":
      return {
        ...state,
        projectTasks: state.tasks.filter(
          (task) => task.projectId === action.payload.id
        ),
      };

    case "VALIDATE__FORM__TASK":
      return {
        ...state,
        errorForm: true,
      };

    default:
      return state;
  }
};
