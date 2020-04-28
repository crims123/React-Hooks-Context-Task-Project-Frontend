import {
  SHOW__ALERT,
  HIDE__ALERT,
  SUCCESS__REGISTER,
  ERROR__REGISTER,
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
    default:
      return state;
  }
};
