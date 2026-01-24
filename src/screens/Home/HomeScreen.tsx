/**
 * @fileoverview Home Screen
 *
 * Main dashboard/home screen shown after authentication.
 * Displays welcome message and basic navigation info.
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthenticationContext';
import { useTheme } from '../../context/ThemeContext';

const HomeScreen: React.FC = () => {
    const theme = useTheme();
    const { user } = useAuth();

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: theme.colors.backgrounds.primary }]}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <Text style={[styles.greeting, { color: theme.colors.text.secondary }]}>
                        Welcome back,
                    </Text>
                    <Text style={[styles.userName, { color: theme.colors.text.primary }]}>
                        {user?.name || 'User'} 👋
                    </Text>
                </View>

                {/* Content Cards */}
                <View style={styles.cardsContainer}>
                    <View
                        style={[
                            styles.card,
                            {
                                backgroundColor: theme.colors.backgrounds.surface,
                                borderColor: theme.colors.border.light,
                            },
                        ]}
                    >
                        <Text style={[styles.cardTitle, { color: theme.colors.text.primary }]}>
                            🎉 Getting Started
                        </Text>
                        <Text style={[styles.cardDescription, { color: theme.colors.text.secondary }]}>
                            This is your home screen. Start building your app from here!
                        </Text>
                    </View>

                    <View
                        style={[
                            styles.card,
                            {
                                backgroundColor: theme.colors.primary + '15',
                                borderColor: theme.colors.primary + '30',
                            },
                        ]}
                    >
                        <Text style={[styles.cardTitle, { color: theme.colors.primary }]}>
                            ✨ Features
                        </Text>
                        <Text style={[styles.cardDescription, { color: theme.colors.text.secondary }]}>
                            {'• Authentication Context with mock auth\n'}
                            {'• Bottom Tab Navigation\n'}
                            {'• Theme System (colors, typography, spacing)\n'}
                            {'• TypeScript support'}
                        </Text>
                    </View>

                    <View
                        style={[
                            styles.card,
                            {
                                backgroundColor: theme.colors.success + '15',
                                borderColor: theme.colors.success + '30',
                            },
                        ]}
                    >
                        <Text style={[styles.cardTitle, { color: theme.colors.success }]}>
                            🔐 Auth Status
                        </Text>
                        <Text style={[styles.cardDescription, { color: theme.colors.text.secondary }]}>
                            {'You are logged in as:\n'}
                            {user?.email || 'Unknown'}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

// =====================================================
// STYLES
// =====================================================

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        padding: 24,
        paddingBottom: 100, // Space for tab bar
    },
    header: {
        marginBottom: 32,
    },
    greeting: {
        fontSize: 16,
        marginBottom: 4,
    },
    userName: {
        fontSize: 28,
        fontWeight: '700',
    },
    cardsContainer: {
        gap: 16,
    },
    card: {
        padding: 20,
        borderRadius: 16,
        borderWidth: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 14,
        lineHeight: 22,
    },
});

export default HomeScreen;
