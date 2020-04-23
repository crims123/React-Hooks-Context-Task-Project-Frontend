import React, { useReducer } from "react";
import taskContext from "../../context/tasks/taskContext";
import taskReducer from "../../reducers/tasks/taskReducer";

function TaskStore(props) {
  const initialState = {

  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  // const setShowProject = (value) => {
  //   dispatch({
  //     type: "SHOW__PROJECT",
  //     payload: value,
  //   });
  // };

  return (
    <taskContext.Provider
      value={{
  
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
}

export default TaskStore;
