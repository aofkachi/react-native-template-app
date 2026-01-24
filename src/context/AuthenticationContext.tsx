/**
 * @fileoverview Authentication Context Provider
 *
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║                        🔐 MOCK AUTHENTICATION                              ║
 * ║                                                                           ║
 * ║  This file contains MOCK authentication logic for development/demo.      ║
 * ║  Replace this with your actual authentication provider:                   ║
 * ║                                                                           ║
 * ║  • AWS Amplify: Use @aws-amplify/auth                                     ║
 * ║  • Firebase: Use @react-native-firebase/auth                              ║
 * ║  • Supabase: Use @supabase/supabase-js                                    ║
 * ║  • Custom API: Implement your own JWT-based auth                          ║
 * ║                                                                           ║
 * ║  See the "REPLACE THIS" sections below for what to modify.                ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 */

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// =====================================================
// TYPE DEFINITIONS
// =====================================================

/**
 * User object type
 *
 * 🔄 REPLACE THIS: Modify to match your auth provider's user object
 * Example for Firebase:
 *   interface User {
 *     uid: string;
 *     email: string | null;
 *     displayName: string | null;
 *     photoURL: string | null;
 *   }
 */
interface User {
    id: string;
    email: string;
    name: string;
}

/**
 * Authentication context type
 */
interface AuthenticationContextType {
    // State
    isAuthenticated: boolean;
    isLoading: boolean;
    user: User | null;

    // Actions
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => Promise<void>;
}

// =====================================================
// CONTEXT CREATION
// =====================================================

const AuthenticationContext = createContext<AuthenticationContextType | undefined>(undefined);

// =====================================================
// STORAGE KEYS
// =====================================================

const STORAGE_KEYS = {
    USER: '@auth_user',
    TOKEN: '@auth_token',
};

// =====================================================
// AUTHENTICATION PROVIDER
// =====================================================

/**
 * AuthenticationProvider - Manages authentication state
 *
 * ╔═══════════════════════════════════════════════════════════════════════╗
 * ║  🔄 TO INTEGRATE REAL AUTHENTICATION:                                  ║
 * ║                                                                       ║
 * ║  1. Install your auth package:                                        ║
 * ║     npm install @aws-amplify/auth                                     ║
 * ║     # OR                                                              ║
 * ║     npm install @react-native-firebase/auth                           ║
 * ║                                                                       ║
 * ║  2. Replace the MOCK functions in this file:                          ║
 * ║     • mockLogin() → Call your auth API signIn                         ║
 * ║     • mockRegister() → Call your auth API signUp                      ║
 * ║     • mockLogout() → Call your auth API signOut                       ║
 * ║     • checkExistingSession() → Check for existing auth session        ║
 * ║                                                                       ║
 * ║  3. Update the User interface to match your auth provider             ║
 * ╚═══════════════════════════════════════════════════════════════════════╝
 */
export const AuthenticationProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Computed state
    const isAuthenticated = user !== null;

    // =====================================================
    // CHECK EXISTING SESSION ON APP START
    // =====================================================

    useEffect(() => {
        checkExistingSession();
    }, []);

    /**
     * Check for existing authentication session on app start
     *
     * 🔄 REPLACE THIS: Query your auth provider for existing session
     *
     * Example for AWS Amplify:
     *   import { getCurrentUser } from 'aws-amplify/auth';
     *   const user = await getCurrentUser();
     *
     * Example for Firebase:
     *   import auth from '@react-native-firebase/auth';
     *   auth().onAuthStateChanged((user) => { ... });
     */
    const checkExistingSession = async () => {
        try {
            setIsLoading(true);

            // ════════════════════════════════════════════════════
            // 🔄 MOCK: Replace with real session check
            // ════════════════════════════════════════════════════
            const storedUser = await AsyncStorage.getItem(STORAGE_KEYS.USER);
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            // ════════════════════════════════════════════════════

        } catch (error) {
            console.error('Error checking auth session:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // =====================================================
    // LOGIN FUNCTION
    // =====================================================

    /**
     * Login user with email and password
     *
     * 🔄 REPLACE THIS: Call your auth provider's signIn method
     *
     * Example for AWS Amplify:
     *   import { signIn } from 'aws-amplify/auth';
     *   await signIn({ username: email, password });
     *
     * Example for Firebase:
     *   import auth from '@react-native-firebase/auth';
     *   await auth().signInWithEmailAndPassword(email, password);
     */
    const login = useCallback(async (
        email: string,
        password: string
    ): Promise<{ success: boolean; error?: string }> => {
        try {
            setIsLoading(true);

            // ════════════════════════════════════════════════════
            // 🔄 MOCK: Replace with real authentication call
            // ════════════════════════════════════════════════════

            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Mock validation (replace with real auth)
            if (!email.includes('@')) {
                return { success: false, error: 'Invalid email format' };
            }
            if (password.length < 6) {
                return { success: false, error: 'Password must be at least 6 characters' };
            }

            // Mock user creation (replace with real user from auth response)
            const mockUser: User = {
                id: 'user_' + Date.now(),
                email: email,
                name: email.split('@')[0],
            };

            // Store user locally (for mock persistence)
            await AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(mockUser));
            setUser(mockUser);

            // ════════════════════════════════════════════════════

            return { success: true };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: 'Login failed. Please try again.' };
        } finally {
            setIsLoading(false);
        }
    }, []);

    // =====================================================
    // REGISTER FUNCTION
    // =====================================================

    /**
     * Register a new user account
     *
     * 🔄 REPLACE THIS: Call your auth provider's signUp method
     *
     * Example for AWS Amplify:
     *   import { signUp } from 'aws-amplify/auth';
     *   await signUp({ username: email, password, options: { userAttributes: { name } } });
     *
     * Example for Firebase:
     *   import auth from '@react-native-firebase/auth';
     *   const result = await auth().createUserWithEmailAndPassword(email, password);
     *   await result.user.updateProfile({ displayName: name });
     */
    const register = useCallback(async (
        name: string,
        email: string,
        password: string
    ): Promise<{ success: boolean; error?: string }> => {
        try {
            setIsLoading(true);

            // ════════════════════════════════════════════════════
            // 🔄 MOCK: Replace with real registration call
            // ════════════════════════════════════════════════════

            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Mock validation
            if (!name.trim()) {
                return { success: false, error: 'Name is required' };
            }
            if (!email.includes('@')) {
                return { success: false, error: 'Invalid email format' };
            }
            if (password.length < 6) {
                return { success: false, error: 'Password must be at least 6 characters' };
            }

            // Mock user creation
            const mockUser: User = {
                id: 'user_' + Date.now(),
                email: email,
                name: name,
            };

            // Store user locally
            await AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(mockUser));
            setUser(mockUser);

            // ════════════════════════════════════════════════════

            return { success: true };
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, error: 'Registration failed. Please try again.' };
        } finally {
            setIsLoading(false);
        }
    }, []);

    // =====================================================
    // LOGOUT FUNCTION
    // =====================================================

    /**
     * Logout the current user
     *
     * 🔄 REPLACE THIS: Call your auth provider's signOut method
     *
     * Example for AWS Amplify:
     *   import { signOut } from 'aws-amplify/auth';
     *   await signOut();
     *
     * Example for Firebase:
     *   import auth from '@react-native-firebase/auth';
     *   await auth().signOut();
     */
    const logout = useCallback(async () => {
        try {
            setIsLoading(true);

            // ════════════════════════════════════════════════════
            // 🔄 MOCK: Replace with real logout call
            // ════════════════════════════════════════════════════

            await AsyncStorage.removeItem(STORAGE_KEYS.USER);
            await AsyncStorage.removeItem(STORAGE_KEYS.TOKEN);
            setUser(null);

            // ════════════════════════════════════════════════════
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // =====================================================
    // CONTEXT VALUE
    // =====================================================

    const value: AuthenticationContextType = {
        isAuthenticated,
        isLoading,
        user,
        login,
        register,
        logout,
    };

    return (
        <AuthenticationContext.Provider value={value}>
            {children}
        </AuthenticationContext.Provider>
    );
};

// =====================================================
// AUTHENTICATION HOOK
// =====================================================

/**
 * useAuth - Hook to access authentication state and actions
 *
 * Usage:
 * ```tsx
 * const { isAuthenticated, user, login, logout } = useAuth();
 *
 * // Check auth state
 * if (isAuthenticated) {
 *   console.log('Logged in as:', user.name);
 * }
 *
 * // Login
 * const result = await login('user@example.com', 'password123');
 * if (!result.success) {
 *   Alert.alert('Error', result.error);
 * }
 *
 * // Logout
 * await logout();
 * ```
 */
export const useAuth = (): AuthenticationContextType => {
    const context = useContext(AuthenticationContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthenticationProvider');
    }
    return context;
};
