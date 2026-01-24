/**
 * @fileoverview Login Screen
 *
 * User sign-in screen with email and password inputs.
 * Uses mock authentication from AuthenticationContext.
 */

import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthenticationContext';
import { useTheme } from '../../context/ThemeContext';
import type { AuthStackScreenProps } from '../../navigation/types';

type Props = AuthStackScreenProps<'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
    const theme = useTheme();
    const { login, isLoading } = useAuth();

    // Form state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // =====================================================
    // HANDLE LOGIN
    // =====================================================

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        const result = await login(email, password);

        if (!result.success) {
            Alert.alert('Login Failed', result.error || 'Please try again');
        }
        // If successful, RootNavigator will automatically switch to MainTabs
    };

    // =====================================================
    // RENDER
    // =====================================================

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: theme.colors.backgrounds.primary }]}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                {/* Header */}
                <View style={styles.header}>
                    <Text style={[styles.title, { color: theme.colors.text.primary }]}>
                        Welcome Back
                    </Text>
                    <Text style={[styles.subtitle, { color: theme.colors.text.secondary }]}>
                        Sign in to your account
                    </Text>
                </View>

                {/* Form */}
                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <Text style={[styles.label, { color: theme.colors.text.secondary }]}>
                            Email
                        </Text>
                        <TextInput
                            style={[
                                styles.input,
                                {
                                    backgroundColor: theme.colors.backgrounds.secondary,
                                    color: theme.colors.text.primary,
                                    borderColor: theme.colors.border.light,
                                },
                            ]}
                            placeholder="Enter your email"
                            placeholderTextColor={theme.colors.text.subtle}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoComplete="email"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={[styles.label, { color: theme.colors.text.secondary }]}>
                            Password
                        </Text>
                        <TextInput
                            style={[
                                styles.input,
                                {
                                    backgroundColor: theme.colors.backgrounds.secondary,
                                    color: theme.colors.text.primary,
                                    borderColor: theme.colors.border.light,
                                },
                            ]}
                            placeholder="Enter your password"
                            placeholderTextColor={theme.colors.text.subtle}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            autoComplete="password"
                        />
                    </View>

                    {/* Login Button */}
                    <TouchableOpacity
                        style={[
                            styles.button,
                            { backgroundColor: theme.colors.primary },
                            isLoading && styles.buttonDisabled,
                        ]}
                        onPress={handleLogin}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ActivityIndicator color={theme.colors.text.inverse} />
                        ) : (
                            <Text style={[styles.buttonText, { color: theme.colors.text.inverse }]}>
                                Sign In
                            </Text>
                        )}
                    </TouchableOpacity>
                </View>

                {/* Register Link */}
                <View style={styles.footer}>
                    <Text style={[styles.footerText, { color: theme.colors.text.secondary }]}>
                        Don't have an account?{' '}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={[styles.linkText, { color: theme.colors.primary }]}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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
    keyboardView: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    header: {
        alignItems: 'center',
        marginBottom: 48,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
    },
    form: {
        gap: 16,
    },
    inputContainer: {
        marginBottom: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8,
    },
    input: {
        height: 52,
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        borderWidth: 1,
    },
    button: {
        height: 52,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 32,
    },
    footerText: {
        fontSize: 14,
    },
    linkText: {
        fontSize: 14,
        fontWeight: '600',
    },
});

export default LoginScreen;
