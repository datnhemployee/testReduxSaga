import {call, put} from 'redux-saga/effects';
import {SIGN_IN_SUCCESSFUL} from '../actions/logIn';
import UserService from '../services/UserService';

function* logIn({payload}) {
  //   try {
  console.log('saga', payload);
  const mockResult = {...payload};
  const result = yield call(UserService.logIn, payload, mockResult);
  console.log('result', result);
  yield put({type: SIGN_IN_SUCCESSFUL, payload: result});
  //   } catch (e) {
  //     console.log('error', JSON.stringify(e));
  //     yield put({type: SIGN_IN, error: true, message: ''});
  //   }
}

export default {
  logIn,
};
