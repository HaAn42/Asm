// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';

const Tab = createBottomTabNavigator();
export const Lab7() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Screen1" component={Screen1} />
                <Tab.Screen name="Screen2" component={Screen2} />
                <Tab.Screen name="Screen3" component={Screen3} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

