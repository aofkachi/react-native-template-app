/**
 * @fileoverview Profile Screen
 *
 * User profile screen showing user information and logout option.
 */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthenticationContext';
import { useTheme } from '../../context/ThemeContext';

const ProfileScreen: React.FC = () => {
    const theme = useTheme();
    const { user, logout, isLoading } = useAuth();

    // =====================================================
    // HANDLE LOGOUT
    // =====================================================

    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Logout',
                    style: 'destructive',
                    onPress: async () => {
                        await logout();
                        // RootNavigator will automatically switch to AuthStack
                    },
                },
            ]
        );
    };

    // =====================================================
    // RENDER
    // =====================================================

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: theme.colors.backgrounds.primary }]}
        >
            <View style={styles.content}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={[styles.title, { color: theme.colors.text.primary }]}>
                        Profile
                    </Text>
                </View>

                {/* Avatar */}
                <View style={styles.avatarSection}>
                    <View
                        style={[
                            styles.avatar,
                            { backgroundColor: theme.colors.primary + '20' },
                        ]}
                    >
                        <Text style={[styles.avatarText, { color: theme.colors.primary }]}>
                            {user?.name?.charAt(0)?.toUpperCase() || '?'}
                        </Text>
                    </View>
                    <Text style={[styles.userName, { color: theme.colors.text.primary }]}>
                        {user?.name || 'Unknown User'}
                    </Text>
                    <Text style={[styles.userEmail, { color: theme.colors.text.secondary }]}>
                        {user?.email || 'No email'}
                    </Text>
                </View>

                {/* User Info Card */}
                <View
                    style={[
                        styles.infoCard,
                        {
                            backgroundColor: theme.colors.backgrounds.surface,
                            borderColor: theme.colors.border.light,
                        },
                    ]}
                >
                    <View style={styles.infoRow}>
                        <Text style={[styles.infoLabel, { color: theme.colors.text.secondary }]}>
                            User ID
                        </Text>
                        <Text style={[styles.infoValue, { color: theme.colors.text.primary }]}>
                            {user?.id || 'N/A'}
                        </Text>
                    </View>

                    <View style={[styles.divider, { backgroundColor: theme.colors.border.light }]} />

                    <View style={styles.infoRow}>
                        <Text style={[styles.infoLabel, { color: theme.colors.text.secondary }]}>
                            Email
                        </Text>
                        <Text style={[styles.infoValue, { color: theme.colors.text.primary }]}>
                            {user?.email || 'N/A'}
                        </Text>
                    </View>

                    <View style={[styles.divider, { backgroundColor: theme.colors.border.light }]} />

                    <View style={styles.infoRow}>
                        <Text style={[styles.infoLabel, { color: theme.colors.text.secondary }]}>
                            Account Status
                        </Text>
                        <Text style={[styles.statusBadge, { backgroundColor: theme.colors.success + '20', color: theme.colors.success }]}>
                            Active
                        </Text>
                    </View>
                </View>

                {/* Logout Button */}
                <TouchableOpacity
                    style={[
                        styles.logoutButton,
                        { backgroundColor: theme.colors.error + '15' },
                        isLoading && styles.buttonDisabled,
                    ]}
                    onPress={handleLogout}
                    disabled={isLoading}
                >
                    <Text style={[styles.logoutButtonText, { color: theme.colors.error }]}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
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
    content: {
        flex: 1,
        padding: 24,
    },
    header: {
        marginBottom: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
    },
    avatarSection: {
        alignItems: 'center',
        marginBottom: 32,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatarText: {
        fontSize: 40,
        fontWeight: '700',
    },
    userName: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 4,
    },
    userEmail: {
        fontSize: 16,
    },
    infoCard: {
        borderRadius: 16,
        borderWidth: 1,
        padding: 16,
        marginBottom: 24,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    infoLabel: {
        fontSize: 14,
    },
    infoValue: {
        fontSize: 14,
        fontWeight: '500',
    },
    statusBadge: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
        fontSize: 12,
        fontWeight: '600',
        overflow: 'hidden',
    },
    divider: {
        height: 1,
    },
    logoutButton: {
        height: 52,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 80, // Space for tab bar
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    logoutButtonText: {
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ProfileScreen;
