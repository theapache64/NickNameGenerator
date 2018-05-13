/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

// @flow

import { createStackNavigator } from 'react-navigation';
import Splash from './views/Splash';
import Home from './views/Home';
import NickName from './views/NickName';

const App = createStackNavigator({
  Splash: { screen: Splash },
  Home: { screen: Home },
  NickName: { screen: NickName },
}, {
  headerMode: 'none',
  navigationOptions: {
    header: { visible: false },
  },
  initialRouteName: 'Splash',
});

export default App;
