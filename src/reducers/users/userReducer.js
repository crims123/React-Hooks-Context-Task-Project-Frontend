import { SHOW__ALERT, HIDE__ALERT } from '../../types';

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
    default:
      return state;
  }
};
