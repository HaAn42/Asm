import React, { Profiler } from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lab6 from './src/screen/Lab6';
import Lab5 from './src/screen/Lab5';
import HoiAn from './src/screen/Lab5/hoian';
import Icon from 'react-native-vector-icons/Feather';

import Splash from './src/screen/auth/Splash';
import Favorites from './src/screen/app/Favorites';
import Home from './src/screen/app/Home';
import Profile from './src/screen/app/Profile';
import SignIn from './src/screen/auth/SignIn';
import SignUp from './src/screen/auth/SignUp';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;
          if (route.name === 'Home') {
            icon = focused
              ? require('./src/accset/icon/home_active.png')
              : require('./src/accset/icon/home.png');
          } else if (route.name === 'Profile') {
            icon = focused
              ? require('./src/accset/icon/profile_active.png')
              : require('./src/accset/icon/profile.png');
          } else if (route.name === 'Favorites') {
            icon = focused
              ? require('./src/accset/icon/bookmark_active.png')
              : require('./src/accset/icon/bookmark.png');
          }
          return <Image style={{ width: 24, height: 24 }} source={icon} />;
        },
      })}
      options={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { borderTopColor: '#DADADA' } }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};
const App = () => {
  const isSignedIn = false;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Splash" component={Splash} />
        )}
        <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
