import {takeEvery, takeLatest} from 'redux-saga/effects';
import {SIGN_IN} from '../actions/logIn';
import logInSaga from './logIn';

export default function* rootSaga() {
  yield takeEvery(SIGN_IN, logInSaga.logIn);
}
