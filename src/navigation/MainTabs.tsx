/**
 * @fileoverview Main Bottom Tab Navigator
 *
 * Bottom tab navigation with Home, Profile, and Settings tabs.
 * Shown when user is authenticated.
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, Platform } from 'react-native';
import { MainTabParamList } from './types';
import { useTheme } from '../context/ThemeContext';

// Screens
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';

// Icons - Using simple text icons for demo (replace with react-native-vector-icons)
// 🔄 TO USE REAL ICONS: npm install react-native-vector-icons
// import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator<MainTabParamList>();

// =====================================================
// TAB BAR ICON COMPONENT
// =====================================================

/**
 * Simple icon component using emoji/text
 *
 * 🔄 REPLACE THIS: Use react-native-vector-icons for production
 *
 * Example with Feather icons:
 *   import Feather from 'react-native-vector-icons/Feather';
 *   <Feather name="home" size={24} color={color} />
 */
const TabIcon: React.FC<{ name: string; color: string; focused: boolean }> = ({
    name,
    color,
    focused,
}) => {
    const icons: Record<string, string> = {
        home: '🏠',
        profile: '👤',
        settings: '⚙️',
    };

    return (
        <View style={[styles.iconContainer, focused && styles.iconFocused]}>
            <View>
                {/* Replace emoji with actual icons in production */}
                <View style={{ opacity: focused ? 1 : 0.7 }}>
                    {/* This is a placeholder - use react-native-vector-icons */}
                    <View style={[styles.iconPlaceholder, { borderColor: color }]}>
                        <View style={{ opacity: 1 }}>
                            {/* Emoji placeholder */}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

// =====================================================
// MAIN TABS NAVIGATOR
// =====================================================

/**
 * MainTabs - Bottom tab navigation
 *
 * Features:
 * - Three main tabs: Home, Profile, Settings
 * - Custom styling with theme support
 * - Tab bar icons with active/inactive states
 */
const MainTabs: React.FC = () => {
    const theme = useTheme();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.text.subtle,
                tabBarStyle: {
                    backgroundColor: theme.colors.backgrounds.surface,
                    borderTopWidth: 1,
                    borderTopColor: theme.colors.border.light,
                    paddingTop: 8,
                    paddingBottom: Platform.OS === 'ios' ? 24 : 8,
                    height: Platform.OS === 'ios' ? 88 : 64,
                    elevation: 8,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                    marginTop: 4,
                },
                tabBarIcon: ({ color, focused }) => {
                    let iconName = 'home';
                    if (route.name === 'Home') iconName = 'home';
                    else if (route.name === 'Profile') iconName = 'profile';
                    else if (route.name === 'Settings') iconName = 'settings';

                    return <TabIcon name={iconName} color={color} focused={focused} />;
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Profile' }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ tabBarLabel: 'Settings' }}
            />
        </Tab.Navigator>
    );
};

// =====================================================
// STYLES
// =====================================================

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
    },
    iconFocused: {
        transform: [{ scale: 1.1 }],
    },

    iconPlaceholder: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MainTabs;
