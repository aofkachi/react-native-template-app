/**
 * @fileoverview Color Palette for the Template App
 *
 * This file defines the complete color system for the application.
 * Customize these colors to match your brand identity.
 */

export const colors = {
    // =====================================================
    // PRIMARY COLORS
    // =====================================================
    /**
     * Primary brand color - used for key actions, highlights, and branding
     * Change this to your brand's primary color
     */
    primary: '#6366F1', // Indigo

    /**
     * Secondary brand color - used for secondary actions and accents
     */
    secondary: '#8B5CF6', // Purple

    // =====================================================
    // SEMANTIC COLORS
    // =====================================================
    /**
     * Success color - used for positive feedback, confirmations
     */
    success: '#10B981', // Green

    /**
     * Error color - used for errors, destructive actions
     */
    error: '#EF4444', // Red

    /**
     * Warning color - used for warnings, cautions
     */
    warning: '#F59E0B', // Amber

    /**
     * Info color - used for informational messages
     */
    info: '#3B82F6', // Blue

    // =====================================================
    // BACKGROUND COLORS
    // =====================================================
    backgrounds: {
        /**
         * Primary background - main app background
         */
        primary: '#FFFFFF',

        /**
         * Secondary background - cards, elevated surfaces
         */
        secondary: '#F9FAFB',

        /**
         * Surface background - modals, dropdowns
         */
        surface: '#FFFFFF',

        /**
         * Subtle background - disabled states, dividers
         */
        subtle: '#F3F4F6',
    },

    // =====================================================
    // TEXT COLORS
    // =====================================================
    text: {
        /**
         * Primary text - main content, headings
         */
        primary: '#111827',

        /**
         * Secondary text - supporting content
         */
        secondary: '#4B5563',

        /**
         * Subtle text - placeholders, hints
         */
        subtle: '#9CA3AF',

        /**
         * Inverse text - text on dark backgrounds
         */
        inverse: '#FFFFFF',
    },

    // =====================================================
    // BORDER COLORS
    // =====================================================
    border: {
        light: '#E5E7EB',
        medium: '#D1D5DB',
        dark: '#9CA3AF',
    },
};

export type Colors = typeof colors;
