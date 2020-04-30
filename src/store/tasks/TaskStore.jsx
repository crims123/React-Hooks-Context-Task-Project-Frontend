import React, { useReducer } from 'react';
import axiosClient from '../../config/api';
import taskContext from '../../context/tasks/taskContext';
import taskReducer from '../../reducers/tasks/taskReducer';
import {
  GET__TASKS,
  ADD__TASK,
  VALIDATE__FORM__TASK,
  DELETE__TASK,
  CHANGE__STATE__TASK,
  CHANGE__SELECTED__TASK,
  MODIFY__SELECTED__TASK,
} from '../../types';

function TaskStore(props) {
  const initialState = {
    tasks: [],
    projectTasks: [],
    errorForm: false,
    selectedTask: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const setGetTasks = async (id) => {
    try {
      const tasks = await axiosClient.get(`/api/tasks/${id}`);

      dispatch({
        type: GET__TASKS,
        payload: tasks.data.data.tasks,
      });
    } catch (error) {
      console.log(error)
    }
  };


  const setAddTask = async (task) => {
    try {
      const newTask = await axiosClient.post('/api/tasks/', task);

      dispatch({
        type: ADD__TASK,
        payload: newTask.data.data.task,
      });
    } catch (error) {
      console.log(error)
    }
  };

  const setErrorForm = () => {
    dispatch({
      type: VALIDATE__FORM__TASK,
    });
  };

  const setDeleteTask = (id) => {
    dispatch({
      type: DELETE__TASK,
      payload: id,
    });
  };

  const setStateTask = (id) => {
    dispatch({
      type: CHANGE__STATE__TASK,
      payload: id,
    });
  };

  const setSelectedTask = (task) => {
    dispatch({
      type: CHANGE__SELECTED__TASK,
      payload: task,
    });
  };

  const setModifyTask = (task) => {
    dispatch({
      type: MODIFY__SELECTED__TASK,
      payload: task,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        setGetTasks,
        setAddTask,
        projectTasks: state.projectTasks,
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
