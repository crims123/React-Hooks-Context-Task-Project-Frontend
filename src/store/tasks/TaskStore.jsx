import React, { useReducer } from "react";
import taskContext from "../../context/tasks/taskContext";
import taskReducer from "../../reducers/tasks/taskReducer";

function TaskStore(props) {
  const initialState = {
    tasks: [],
    projectTasks: [],
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const setAddTask = (task) => {
    dispatch({
      type: "ADD__TASK",
      payload: task,
    });
  };

  const setProjectTasks = (project) => {
    dispatch({
      type: "FILTER__PROJECT__TASK",
      payload: project,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        setAddTask,
        projectTasks: state.projectTasks,
        setProjectTasks,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
}

export default TaskStore;
