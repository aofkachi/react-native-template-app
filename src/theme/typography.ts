/**
 * @fileoverview Typography System for the Template App
 *
 * This file defines the font sizes, weights, and text styles.
 * Customize the font family and sizes to match your design system.
 */

export const typography = {
    // =====================================================
    // FONT FAMILY
    // =====================================================
    /**
     * Primary font family
     * Change this to use a custom font (e.g., 'Inter', 'Roboto')
     * 
     * To use a custom font:
     * 1. Install the font package or add font files to assets
     * 2. Load the font in your app entry point
     * 3. Update this value to match the loaded font name
     */
    fontFamily: {
        regular: 'System',
        medium: 'System',
        bold: 'System',
    },

    // =====================================================
    // FONT SIZES
    // =====================================================
    fontSize: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 18,
        xl: 20,
        '2xl': 24,
        '3xl': 30,
        '4xl': 36,
    },

    // =====================================================
    // FONT WEIGHTS
    // =====================================================
    fontWeight: {
        normal: '400' as const,
        medium: '500' as const,
        semibold: '600' as const,
        bold: '700' as const,
    },

    // =====================================================
    // LINE HEIGHTS
    // =====================================================
    lineHeight: {
        tight: 1.25,
        normal: 1.5,
        relaxed: 1.75,
    },

    // =====================================================
    // PRE-DEFINED TEXT STYLES
    // =====================================================
    /**
     * Pre-defined text styles for common use cases
     * Use these for consistency across the app
     */
    heading1: {
        fontSize: 30,
        fontWeight: '700' as const,
        lineHeight: 36,
    },
    heading2: {
        fontSize: 24,
        fontWeight: '600' as const,
        lineHeight: 32,
    },
    heading3: {
        fontSize: 20,
        fontWeight: '600' as const,
        lineHeight: 28,
    },
    body: {
        fontSize: 16,
        fontWeight: '400' as const,
        lineHeight: 24,
    },
    bodySmall: {
        fontSize: 14,
        fontWeight: '400' as const,
        lineHeight: 20,
    },
    caption: {
        fontSize: 12,
        fontWeight: '400' as const,
        lineHeight: 16,
    },
    button: {
        fontSize: 16,
        fontWeight: '600' as const,
        lineHeight: 24,
    },
};

export type Typography = typeof typography;
