import React, { useReducer } from "react";
import taskContext from "../../context/tasks/taskContext";
import taskReducer from "../../reducers/tasks/taskReducer";

function TaskStore(props) {
  const initialState = {
    tasks: [],
    projectTasks: [],
    errorForm: false,
    selectedTask: null,
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
      type: "CHANGE__STATE__TASK",
      payload: id,
    });
  };

  const setSelectedTask = (task) => {
    dispatch({
      type: "CHANGE__SELECTED__TASK",
      payload: task,
    });
  };

  const setModifyTask = (task) => {
    dispatch({
      type: "MODIFY__SELECTED__TASK",
      payload: task,
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
        selectedTask: state.selectedTask,
        setSelectedTask,
        setModifyTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
}

export default TaskStore;
