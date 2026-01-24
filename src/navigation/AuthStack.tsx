/**
 * @fileoverview Authentication Stack Navigator
 *
 * Stack navigator for authentication screens (Login, Register).
 * Shown when user is not authenticated.
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

/**
 * AuthStack - Authentication flow navigator
 *
 * Contains:
 * - LoginScreen: User sign-in
 * - RegisterScreen: New user registration
 */
const AuthStack: React.FC = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;
