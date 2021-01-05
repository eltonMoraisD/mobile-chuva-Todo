import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './pages/routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1c2e42" />
      <Routes />
    </>
  );
};

export default App;
