/**
 * @fileoverview Register Screen
 *
 * New user registration screen with name, email, and password inputs.
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
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthenticationContext';
import { useTheme } from '../../context/ThemeContext';
import type { AuthStackScreenProps } from '../../navigation/types';

type Props = AuthStackScreenProps<'Register'>;

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
    const theme = useTheme();
    const { register, isLoading } = useAuth();

    // Form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // =====================================================
    // HANDLE REGISTRATION
    // =====================================================

    const handleRegister = async () => {
        // Validation
        if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        const result = await register(name, email, password);

        if (!result.success) {
            Alert.alert('Registration Failed', result.error || 'Please try again');
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
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={[styles.title, { color: theme.colors.text.primary }]}>
                            Create Account
                        </Text>
                        <Text style={[styles.subtitle, { color: theme.colors.text.secondary }]}>
                            Sign up to get started
                        </Text>
                    </View>

                    {/* Form */}
                    <View style={styles.form}>
                        <View style={styles.inputContainer}>
                            <Text style={[styles.label, { color: theme.colors.text.secondary }]}>
                                Full Name
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
                                placeholder="Enter your name"
                                placeholderTextColor={theme.colors.text.subtle}
                                value={name}
                                onChangeText={setName}
                                autoComplete="name"
                            />
                        </View>

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
                                placeholder="Create a password"
                                placeholderTextColor={theme.colors.text.subtle}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                                autoComplete="password-new"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={[styles.label, { color: theme.colors.text.secondary }]}>
                                Confirm Password
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
                                placeholder="Confirm your password"
                                placeholderTextColor={theme.colors.text.subtle}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                secureTextEntry
                                autoComplete="password-new"
                            />
                        </View>

                        {/* Register Button */}
                        <TouchableOpacity
                            style={[
                                styles.button,
                                { backgroundColor: theme.colors.primary },
                                isLoading && styles.buttonDisabled,
                            ]}
                            onPress={handleRegister}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <ActivityIndicator color={theme.colors.text.inverse} />
                            ) : (
                                <Text style={[styles.buttonText, { color: theme.colors.text.inverse }]}>
                                    Create Account
                                </Text>
                            )}
                        </TouchableOpacity>
                    </View>

                    {/* Login Link */}
                    <View style={styles.footer}>
                        <Text style={[styles.footerText, { color: theme.colors.text.secondary }]}>
                            Already have an account?{' '}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={[styles.linkText, { color: theme.colors.primary }]}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 32,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
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
        gap: 12,
    },
    inputContainer: {
        marginBottom: 4,
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

export default RegisterScreen;
