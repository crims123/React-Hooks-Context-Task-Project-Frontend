import React, { useReducer } from "react";
import taskContext from "../../context/tasks/taskContext";
import taskReducer from "../../reducers/tasks/taskReducer";

function TaskStore(props) {
  const initialState = {
    tasks: [],
    projectTasks: [],
    errorForm: false,
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

  const setErrorForm = () => {
    dispatch({
      type: "VALIDATE__FORM__TASK",
    });
  };

  const setDeleteTask = (id) => {
    dispatch({
      type: "DELETE__TASK",
      payload: id,
    });
  };

  const setStateTask = (id) => {
    dispatch({
      type: "CHANGE_STATE__TASK",
      payload: state,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        setAddTask,
        projectTasks: state.projectTasks,
        setProjectTasks,
        errorForm: state.errorForm,
        setErrorForm,
        setDeleteTask,
        setStateTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
}

export default TaskStore;
