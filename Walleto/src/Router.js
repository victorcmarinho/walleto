import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from './screens/FirstScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ListPaymentScreen from './screens/ListPaymentScreen';

const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="FirstScreen"
                    component={FirstScreen} />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen} />
                <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen} />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen} />
                <Stack.Screen
                    name="ListPaymentScreen"
                    component={ListPaymentScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;