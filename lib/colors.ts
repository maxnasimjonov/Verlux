// ============================================
// CENTRALIZED COLOR CONFIGURATION
// ============================================

export const colors = {
  // Primary brand color (dark blue)
  primary: "#1e3a5f",
  primaryHover: "#152d4a",

  // Secondary/accent colors
  dark: "#111827",      // gray-900
  darkSection: "#111827", // For dark background sections

  // Text colors
  textPrimary: "#111827",   // gray-900
  textSecondary: "#4b5563", // gray-600
  textMuted: "#6b7280",     // gray-500

  // Background colors
  bgWhite: "#ffffff",
  bgLight: "#f9fafb",       // gray-50
  bgLightAlt: "#f3f4f6",    // gray-100

  // Border colors
  borderLight: "#e5e7eb",   // gray-200
  borderMedium: "#d1d5db",  // gray-300
};

// CSS custom properties for use in Tailwind
export const cssVars = {
  "--color-primary": colors.primary,
  "--color-primary-hover": colors.primaryHover,
  "--color-dark": colors.dark,
};

// Export individual colors for direct use
export const {
  primary,
  primaryHover,
  dark,
  darkSection,
  textPrimary,
  textSecondary,
  textMuted,
  bgWhite,
  bgLight,
  bgLightAlt,
  borderLight,
  borderMedium,
} = colors;
