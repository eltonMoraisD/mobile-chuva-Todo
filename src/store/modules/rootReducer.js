import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import todo from './todo/reducer';

export default combineReducers({
  auth,
  user,
  todo,
});
