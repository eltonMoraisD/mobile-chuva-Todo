import React from 'react';
import {useSelector} from 'react-redux';

import createRouter from './pages/routes';

const App = () => {
  const {signed} = useSelector((state) => state.auth);

  //renderiza a rota todos se o usuario fez login com sucesso
  const Routes = createRouter(signed);
  return <Routes />;
};

export default App;
