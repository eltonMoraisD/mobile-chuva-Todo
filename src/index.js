import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

import {store, persistor} from './store';

import App from './App';

const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#1c2e42" />
        <App />
      </PersistGate>
    </Provider>
  );
};

export default Index;
