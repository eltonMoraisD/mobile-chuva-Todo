import {takeLatest, call, put, all} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '../../../services/api';
import {todoFailure, todoSuccess} from './actions';
import {store} from '../../../store';

export function* createTodo({payload}) {
  const token = store.getState().auth.token;

  try {
    const todo = payload.data;
    console.tron.log('Todo', todo);
    const response = yield call(
      api.post,
      '/user/create-todos',
      {description: todo},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      },
    );

    console.tron.log('RESPONSE', response.data);
    yield put(todoSuccess(response.data));
  } catch (error) {
    Alert.alert('ERROR, to-do not created');
    yield put(todoFailure());
  }
}

export default all([takeLatest('@todo/TODO_REQUEST', createTodo)]);
