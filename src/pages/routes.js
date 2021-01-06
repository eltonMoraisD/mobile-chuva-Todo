import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Todos from '../pages/Todos';

export default (logged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        Todo: createSwitchNavigator({
          Todos,
        }),
      },
      {initialRouteName: logged ? 'Todo' : 'Sign'},
    ),
  );
