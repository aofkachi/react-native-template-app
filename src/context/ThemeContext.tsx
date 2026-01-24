/**
 * @fileoverview Theme Context Provider
 *
 * Provides theme access throughout the application via React Context.
 * Wrap your app with ThemeProvider to enable useTheme hook.
 */

import React, { createContext, useContext } from 'react';
import theme, { type Theme } from '../theme';

// =====================================================
// CONTEXT DEFINITION
// =====================================================

interface ThemeContextType {
    theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// =====================================================
// THEME PROVIDER COMPONENT
// =====================================================

/**
 * ThemeProvider - Wraps app to provide theme via context
 *
 * Usage:
 * ```tsx
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 * ```
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// =====================================================
// THEME HOOK
// =====================================================

/**
 * useTheme - Hook to access theme values
 *
 * Usage:
 * ```tsx
 * const theme = useTheme();
 * <View style={{ backgroundColor: theme.colors.primary }} />
 * ```
 *
 * @returns Theme object with colors, spacing, typography, responsive
 */
export const useTheme = (): Theme => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context.theme;
};
