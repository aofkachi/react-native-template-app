/**
 * @fileoverview Main App Component
 *
 * Entry point for the React Native Template App.
 * Wraps the app with necessary providers:
 * - ThemeProvider: Theme context for styling
 * - AuthenticationProvider: Authentication state management
 * - SafeAreaProvider: Safe area handling for different devices
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

// Providers
import { ThemeProvider } from './context/ThemeContext';
import { AuthenticationProvider } from './context/AuthenticationContext';

// Navigation
import RootNavigator from './navigation/RootNavigator';

/**
 * App - Root component of the application
 *
 * Provider hierarchy:
 * 1. GestureHandlerRootView - Required for gesture handling
 * 2. SafeAreaProvider - Handles safe area insets
 * 3. ThemeProvider - Provides theme via context
 * 4. AuthenticationProvider - Provides auth state via context
 * 5. RootNavigator - Handles navigation
 */
const App: React.FC = () => {
    return (
        <GestureHandlerRootView style={styles.container}>
            <SafeAreaProvider>
                <ThemeProvider>
                    <AuthenticationProvider>
                        <StatusBar style="auto" />
                        <RootNavigator />
                    </AuthenticationProvider>
                </ThemeProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
