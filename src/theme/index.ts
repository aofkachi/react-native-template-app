/**
 * @fileoverview Theme Index - Aggregates all theme modules
 *
 * This file combines colors, typography, spacing, and responsive utilities
 * into a single theme object that is consumed by ThemeContext.
 */

import { Dimensions, Platform } from 'react-native';
import { colors, type Colors } from './colors';
import { spacing, type Spacing } from './spacing';
import { typography, type Typography } from './typography';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// =====================================================
// RESPONSIVE UTILITIES
// =====================================================
/**
 * Responsive utilities for building adaptive layouts
 * Includes tablet detection and percentage-based sizing
 */
export const responsive = {
    // Screen dimensions
    screenWidth,
    screenHeight,

    // Device detection
    isTablet: Platform.OS === 'ios' && screenWidth > 600,
    isAndroid: Platform.OS === 'android',
    isIOS: Platform.OS === 'ios',

    // Percentage-based sizing helpers
    width: (percentage: number) => (screenWidth * percentage) / 100,
    height: (percentage: number) => (screenHeight * percentage) / 100,

    // Border radius scale
    borderRadius: {
        xs: 4,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 24,
        full: 9999,
    },

    // Common component heights
    buttonHeight: 48,
    inputHeight: 48,
    headerHeight: 56,
    tabBarHeight: 80,
};

// =====================================================
// COMBINED THEME OBJECT
// =====================================================
const theme = {
    colors,
    spacing,
    typography,
    responsive,
};

export default theme;

export type Theme = {
    colors: Colors;
    spacing: Spacing;
    typography: Typography;
    responsive: typeof responsive;
};
