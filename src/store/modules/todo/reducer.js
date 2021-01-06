import produce from 'immer';
const INITIAL_STATE = {
  todos: [],
};

export default function todo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@todo/TODO_REQUEST':
      return produce(state, (drafState) => {
        drafState.todos.push(action.payload.data);
      });

    default:
      return state;
  }
}
