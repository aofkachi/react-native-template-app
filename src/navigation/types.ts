/**
 * @fileoverview Navigation Type Definitions
 *
 * Defines TypeScript types for all navigation stacks and screen params.
 * Update these when adding new screens or navigation params.
 */

// =====================================================
// ROOT STACK TYPES
// =====================================================

/**
 * Root stack navigator param list
 * Includes both auth and main app stacks
 */
export type RootStackParamList = {
    // Auth flow
    AuthStack: undefined;

    // Main app
    MainTabs: undefined;
};

// =====================================================
// AUTH STACK TYPES
// =====================================================

/**
 * Authentication stack param list
 */
export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
};

// =====================================================
// MAIN TAB TYPES
// =====================================================

/**
 * Main bottom tab navigator param list
 */
export type MainTabParamList = {
    Home: undefined;
    Profile: undefined;
    Settings: undefined;
};

// =====================================================
// SCREEN PROPS TYPES
// =====================================================

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// Root Stack Screen Props
export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

// Auth Stack Screen Props
export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
    NativeStackScreenProps<AuthStackParamList, T>;

// Main Tab Screen Props
export type MainTabScreenProps<T extends keyof MainTabParamList> =
    BottomTabScreenProps<MainTabParamList, T>;
