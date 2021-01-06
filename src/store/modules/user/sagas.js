import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {store} from '../../../store';

import api from '../../../services/api';

import {updateProfileFailure, updateProfileSuccess} from './actions';

export function* updateProfile({payload}) {
  const token = store.getState().auth.token;

  try {
    const {name, email, ...rest} = payload.data;

    const profile = Object.assign({name, email}, rest.oldPassword ? rest : {});

    const response = yield call(api.put, '/auth/user-update', profile, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });

    Alert.alert('Perfil updated');
    // history.back('/todo-list');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert('Update fail');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
