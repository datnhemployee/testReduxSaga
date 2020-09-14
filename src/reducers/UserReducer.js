import {SIGN_IN_SUCCESSFUL, SIGN_UP_SUCCESSFUL} from '../actions/logIn';
const InitialState = {};

export default function (state = InitialState, action) {
  console.log('actions', JSON.stringify(action));
  switch (action.type) {
    case SIGN_IN_SUCCESSFUL:
    case SIGN_UP_SUCCESSFUL:
      const {
        payload: {username, password},
      } = action;
      return {
        ...state,
        username,
        password,
      };
    default:
      return state;
  }
}
