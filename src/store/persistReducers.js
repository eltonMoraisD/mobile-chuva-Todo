import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'todo',
      storage: AsyncStorage,
      whitelist: ['auth', 'user'],
    },
    reducers,
  );

  return persistedReducers;
};
