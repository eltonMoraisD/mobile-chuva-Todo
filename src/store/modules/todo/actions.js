export function todoRequest(data) {
  return {
    type: '@todo/TODO_REQUEST',
    payload: {data},
  };
}

export function todoSuccess(todo) {
  return {
    type: '@todo/TODO_SUCCESS',
    payload: {todo},
  };
}

export function todoFailure() {
  return {
    type: '@todo/TODO_FAILURE',
  };
}

export function getTodoRequest() {
  return {
    type: '@tdo/GET_TODO_REQUEST',
  };
}

export function getTodoFailure() {
  return {
    type: '@todo/GET_TODO_FAIL',
  };
}
