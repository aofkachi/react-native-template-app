/**
 * @fileoverview Spacing System for the Template App
 *
 * This file defines spacing constants for consistent padding and margins.
 * Based on an 8px grid system for visual harmony.
 */

export const spacing = {
    // =====================================================
    // BASE SPACING SCALE (8px grid)
    // =====================================================
    /**
     * Base spacing values following an 8px grid
     * Use these for padding, margins, and gaps
     */
    none: 0,
    xs: 4,     // Extra small
    sm: 8,     // Small
    md: 16,    // Medium (base unit)
    lg: 24,    // Large
    xl: 32,    // Extra large
    '2xl': 48, // 2x Extra large
    '3xl': 64, // 3x Extra large

    // =====================================================
    // SEMANTIC SPACING
    // =====================================================
    /**
     * Semantic spacing for common use cases
     */
    screenPadding: 16,     // Padding from screen edges
    cardPadding: 16,       // Internal card padding
    sectionGap: 24,        // Gap between sections
    itemGap: 12,           // Gap between list items
    inputPadding: 12,      // Padding inside inputs

    // =====================================================
    // VERTICAL SPACING
    // =====================================================
    /**
     * Vertical-specific spacing values
     */
    verticalXxs: 2,
    verticalXs: 4,
    verticalSm: 8,
    verticalMd: 16,
    verticalLg: 24,
    verticalXl: 32,
};

export type Spacing = typeof spacing;
