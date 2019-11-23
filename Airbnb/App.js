
import React, {Component} from 'react';
import { StatusBar, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Root, configureStore} from './src/navigators/AppNavigator';
import TurnOnNotifications from './src/screens/TurnOnNotifications'

StatusBar.setBarStyle('light-content', true);

class App extends Component{
  render() {
    return (
      <TurnOnNotifications/>
      // <Provider store={configureStore({})}>
      //   <Root/> 
      //   </Provider>
    );
  }
}

//AppRegistry.registerComponent('App', () => App);


export default App;

