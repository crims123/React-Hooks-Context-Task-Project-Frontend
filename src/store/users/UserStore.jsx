import React, { useReducer } from 'react';
import userContext from '../../context/users/userContext';
import userReducer from '../../reducers/users/userReducer';
import { SHOW__ALERT, HIDE__ALERT } from '../../types';

function UserStore(props) {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const setAlert = (msg, category) => {
    dispatch({
      type: SHOW__ALERT,
      payload: {
        msg,
        category,
      },
    });

    setTimeout(() => {
      dispatch({
        type: HIDE__ALERT,
      });
    }, 5000);
  };

  return (
    <userContext.Provider
      value={{
        alert: state.alert,
        setAlert,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}

export default UserStore;
