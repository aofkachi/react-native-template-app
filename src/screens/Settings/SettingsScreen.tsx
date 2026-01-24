/**
 * @fileoverview Settings Screen
 *
 * Application settings screen stub.
 * Extend this with your app-specific settings.
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeContext';

const SettingsScreen: React.FC = () => {
    const theme = useTheme();

    // =====================================================
    // SETTINGS ITEMS
    // =====================================================

    const settingsItems = [
        { id: 'notifications', icon: '🔔', title: 'Notifications', subtitle: 'Manage notification preferences' },
        { id: 'appearance', icon: '🎨', title: 'Appearance', subtitle: 'Theme, colors, and display' },
        { id: 'privacy', icon: '🔒', title: 'Privacy', subtitle: 'Privacy and security settings' },
        { id: 'language', icon: '🌐', title: 'Language', subtitle: 'App language preferences' },
        { id: 'help', icon: '❓', title: 'Help & Support', subtitle: 'FAQ and contact support' },
        { id: 'about', icon: 'ℹ️', title: 'About', subtitle: 'App version and info' },
    ];

    // =====================================================
    // RENDER
    // =====================================================

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
                    <Text style={[styles.title, { color: theme.colors.text.primary }]}>
                        Settings
                    </Text>
                </View>

                {/* Settings List */}
                <View
                    style={[
                        styles.settingsList,
                        {
                            backgroundColor: theme.colors.backgrounds.surface,
                            borderColor: theme.colors.border.light,
                        },
                    ]}
                >
                    {settingsItems.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <TouchableOpacity
                                style={styles.settingsItem}
                                onPress={() => {
                                    // Handle settings item press
                                    console.log('Pressed:', item.title);
                                }}
                            >
                                <Text style={styles.settingsIcon}>{item.icon}</Text>
                                <View style={styles.settingsTextContainer}>
                                    <Text style={[styles.settingsTitle, { color: theme.colors.text.primary }]}>
                                        {item.title}
                                    </Text>
                                    <Text style={[styles.settingsSubtitle, { color: theme.colors.text.secondary }]}>
                                        {item.subtitle}
                                    </Text>
                                </View>
                                <Text style={[styles.chevron, { color: theme.colors.text.subtle }]}>›</Text>
                            </TouchableOpacity>
                            {index < settingsItems.length - 1 && (
                                <View style={[styles.divider, { backgroundColor: theme.colors.border.light }]} />
                            )}
                        </React.Fragment>
                    ))}
                </View>

                {/* App Version */}
                <Text style={[styles.versionText, { color: theme.colors.text.subtle }]}>
                    Version 1.0.0
                </Text>
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
        marginBottom: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
    },
    settingsList: {
        borderRadius: 16,
        borderWidth: 1,
        overflow: 'hidden',
    },
    settingsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    settingsIcon: {
        fontSize: 24,
        marginRight: 16,
    },
    settingsTextContainer: {
        flex: 1,
    },
    settingsTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 2,
    },
    settingsSubtitle: {
        fontSize: 13,
    },
    chevron: {
        fontSize: 24,
        fontWeight: '300',
    },
    divider: {
        height: 1,
        marginLeft: 56,
    },
    versionText: {
        textAlign: 'center',
        marginTop: 32,
        fontSize: 14,
    },
});

export default SettingsScreen;
