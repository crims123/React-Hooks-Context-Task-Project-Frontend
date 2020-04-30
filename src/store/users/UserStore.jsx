import React, { useReducer } from 'react';
import userContext from '../../context/users/userContext';
import userReducer from '../../reducers/users/userReducer';
import axiosClient from '../../config/api';
import tokenAuth from '../../config/auth';
import {
  SHOW__ALERT,
  HIDE__ALERT,
  SUCCESS__REGISTER,
  ERROR__REGISTER,
  GET__AUTHENTICATED__USER,
  GET__AUTHENTICATED__USER__ERROR,
  LOGIN__USER,
  LOGIN__USER__ERROR,
  LOGOUT__USER,
} from '../../types';

function UserStore(props) {
  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    loadLogin: false,
    alert: null,
    user: null,
    message: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const setAddAlert = (msg, category) => {
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

  const setAddUser = async (user) => {
    try {
      const newUser = await axiosClient.post('/api/users', user);

      dispatch({
        type: SUCCESS__REGISTER,
        payload: newUser.data.data.token,
      });
      setGetAuthenticatedUser();
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

  const setGetAuthenticatedUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      tokenAuth(token);
    }
    try {
      const user = await axiosClient.get('/api/users');

      dispatch({
        type: GET__AUTHENTICATED__USER,
        payload: user.data.user,
      });
    } catch (error) {
      dispatch({
        type: GET__AUTHENTICATED__USER__ERROR,
        payload: error,
      });
    }
  };

  const setGetLoginToken = async (user) => {
    try {
      const authenticated = await axiosClient.post('/api/users/login', user);

      dispatch({
        type: LOGIN__USER,
        payload: authenticated.data.data.token,
      });

      setGetAuthenticatedUser();
    } catch (error) {
      const alert = {
        msg: error.response.data.message,
        category: 'alerta-error',
      };

      dispatch({
        type: LOGIN__USER__ERROR,
        payload: alert,
      });

      setTimeout(() => {
        dispatch({
          type: HIDE__ALERT,
        });
      }, 5000);
    }
  };

  const setLogOut = () => {
    localStorage.removeItem('token');

    dispatch({
      type: LOGOUT__USER,
    });
  };

  return (
    <userContext.Provider
      value={{
        alert: state.alert,
        setAddAlert,
        user: state.user,
        setGetAuthenticatedUser,
        authenticated: state.authenticated,
        setGetLoginToken,
        loadLogin: state.loadLogin,
        setAddUser,
        setLogOut,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
}

export default UserStore;
