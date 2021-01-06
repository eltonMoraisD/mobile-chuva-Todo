import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};
export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return produce(state, (drafState) => {
        drafState.loading = true;
      });
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, (drafState) => {
        drafState.token = action.payload.token;
        drafState.signed = true;
        drafState.loading = false;
      });

    case '@auth/SIGN_OUT':
      return produce(state, (drafState) => {
        drafState.token = null;
        drafState.signed = false;
      });

    case '@auth/SIGN_FAILURE':
      return produce(state, (drafState) => {
        drafState.loading = false;
      });
    default:
      return state;
  }
}
