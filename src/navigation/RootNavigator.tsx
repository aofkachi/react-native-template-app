/**
 * @fileoverview Root Navigator
 *
 * Top-level navigator that conditionally renders:
 * - AuthStack when user is NOT authenticated
 * - MainTabs when user IS authenticated
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { RootStackParamList } from './types';
import { useAuth } from '../context/AuthenticationContext';
import { useTheme } from '../context/ThemeContext';

// Navigators
import AuthStack from './AuthStack';
import MainTabs from './MainTabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

// =====================================================
// ROOT NAVIGATOR COMPONENT
// =====================================================

/**
 * RootNavigator - Conditional navigation based on auth state
 *
 * Flow:
 * 1. Shows loading spinner while checking auth
 * 2. If NOT authenticated → Show AuthStack (Login/Register)
 * 3. If authenticated → Show MainTabs (Home/Profile/Settings)
 */
const RootNavigator: React.FC = () => {
    const { isAuthenticated, isLoading } = useAuth();
    const theme = useTheme();

    // =====================================================
    // LOADING STATE
    // =====================================================

    if (isLoading) {
        return (
            <View
                style={[
                    styles.loadingContainer,
                    { backgroundColor: theme.colors.backgrounds.primary },
                ]}
            >
                <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
        );
    }

    // =====================================================
    // NAVIGATION CONTAINER
    // =====================================================

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isAuthenticated ? (
                    // User is authenticated - show main app
                    <Stack.Screen name="MainTabs" component={MainTabs} />
                ) : (
                    // User is not authenticated - show auth flow
                    <Stack.Screen name="AuthStack" component={AuthStack} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

// =====================================================
// STYLES
// =====================================================

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RootNavigator;
