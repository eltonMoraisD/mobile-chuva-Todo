import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '../../../services/api';

import {signInSuccess, signFailure} from './actions';

export function* login({payload}) {
  try {
    const {email, password} = payload;

    const response = yield call(api.post, '/auth/authenticate', {
      email,
      password,
    });

    const {token, user} = response.data;

    yield put(signInSuccess(token, user));
  } catch (error) {
    Alert.alert('Login fail');
    yield put(signFailure());
  }
}

export function* register({payload}) {
  try {
    const {name, email, password} = payload;
    yield call(api.post, '/auth/register', {
      name,
      email,
      password,
    });
  } catch (err) {
    Alert.alert('Register fail');
    yield put(signFailure());
  }
}

export function sair() {}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', login),
  takeLatest('@auth/SIGN_UP_REQUEST', register),
  takeLatest('@auth/SIGN_OUT', sair),
]);
