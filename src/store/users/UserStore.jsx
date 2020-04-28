import React, { useReducer } from 'react';
import userContext from '../../context/users/userContext';
import userReducer from '../../reducers/users/userReducer';
import axiosClient from '../../config/api';
import {
  SHOW__ALERT,
  HIDE__ALERT,
  SUCCESS__REGISTER,
  ERROR__REGISTER,
} from '../../types';

function UserStore(props) {
  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    alert: null,
    user: null,
    message: null,
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

  const setUser = async (user) => {
    try {
      const newUser = await axiosClient.post('/api/users', user);

      dispatch({
        type: SUCCESS__REGISTER,
        payload: newUser.data.data.token,
      });
    } catch (error) {
      const alert = {
        msg: error.response.data.message,
        category: 'alerta-error',
      };

      dispatch({
        type: ERROR__REGISTER,
        payload: alert,
      });

      setTimeout(() => {
        dispatch({
          type: HIDE__ALERT,
        });
      }, 5000);
    }
  };

  return (
    <userContext.Provider
      value={{
        alert: state.alert,
        setAlert,
        user: state.user,
        setUser,
        authenticated: state.authenticated
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}

export default UserStore;
