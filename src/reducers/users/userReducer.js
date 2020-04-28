import {
  SHOW__ALERT,
  HIDE__ALERT,
  SUCCESS__REGISTER,
  ERROR__REGISTER,
  GET__USER,
  LOGIN__ERROR,
  LOGIN__USER
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

    case GET__USER:
      return {
        ...state,
        user: action.payload,
      };

    case LOGIN__ERROR:
      return {
        ...state,
        user: action.payload,
      };

      case LOGIN__USER:
        localStorage.setItem('token', action.payload);
        return {
          ...state,
          authenticated: true,
          token: action.payload
        };

    default:
      return state;
  }
};
