export default (state, action) => {
  switch (action.type) {
    case "ADD__TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        projectTasks: [...state.projectTasks, action.payload],
      };

    case "FILTER__PROJECT__TASK":
      return {
        ...state,
        projectTasks: state.tasks.filter(
          (task) => task.projectId === action.payload.id
        ),
      };

    default:
      return state;
  }
};
