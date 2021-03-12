import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import store from './store';

import Routes from './routes';

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1 }} >
        <Routes />
      </View>
    </NavigationContainer>
    <FlashMessage position="top" />
  </Provider>
)

export default App;
