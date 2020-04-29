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

export default (state, action) => {
  switch (action.type) {
    case SHOW__ALERT:
      return {
        alert: action.payload,
      };

    case HIDE__ALERT:
      return {
        alert: null,
      };

    case SUCCESS__REGISTER:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        authenticated: true,
      };

    case ERROR__REGISTER:
      return {
        ...state,
        alert: action.payload,
        token: null,
      };

    case GET__AUTHENTICATED__USER:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
      };

    case GET__AUTHENTICATED__USER__ERROR:
      return {
        ...state,
        user: action.payload,
        loadLogin: true,
      };

    case LOGIN__USER:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        authenticated: true,
        token: action.payload,
      };

    case LOGIN__USER__ERROR:
      return {
        ...state,
        alert: action.payload,
        token: null,
      };

    case LOGOUT__USER:
      return {
        ...state,
        authenticated: false,
        token: null,
        user: null,
        loadLogin: true,
      };

    default:
      return state;
  }
};
