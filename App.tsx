/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Camera from './src/components/screens/Camera';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notification from './src/components/screens/Notification';
import Gps from './src/components/screens/Gps';
import Loading from './src/components/screens/Loading';
import Home from './src/components/screens/Home';
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AccessCamera" component={Camera} />
        <Stack.Screen name="AccessNotificacion" component={Notification} />
        <Stack.Screen name="AccessGps" component={Gps} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
