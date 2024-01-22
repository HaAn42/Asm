

import React from 'react';
import Splash from './src/screen/auth/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screen/auth/SignIn';
import SignUp from './src/screen/auth/SignUp';
import Lab4 from './src/screen/Lab4';
import Lab3 from './src/screen/Lab3';

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Home' component={Splash} />
    //     <Stack.Screen name='SignIn' component={SignIn} />
    //     <Stack.Screen name='SignUp' component={SignUp} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Lab4 />
  );
}

export default App;
