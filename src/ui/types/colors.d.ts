/**
 * Color Type Definitions
 * This file defines all color-related types used throughout the UI system
 * Source: dynamic_theme.md - Core color architecture
 */

/**
 * Color States - Every color has exactly 7 states
 */
export type ColorState = 'base' | 'background' | 'foreground' | 'hover' | 'border' | 'ring' | 'active';

/**
 * Color Types - 8 core color types
 * primary: Main brand color
 * secondary: Secondary brand accent
 * accent: Highlight/emphasis color
 * muted: Subdued backgrounds and text
 * solid: Solid element backgrounds
 * input: Form input styling
 * surface: Card/panel backgrounds
 * container: Container/section backgrounds
 */
export type ColorType = 'primary' | 'secondary' | 'accent' | 'muted' | 'solid' | 'input' | 'surface' | 'container';

/**
 * HSL Color Value - Format: "hue saturation% lightness%"
 * Example: "190 80% 50%" for cyan
 */
export type HSLValue = string;

/**
 * Single Color with all 7 states
 */
export type ColorValues = Record<ColorState, HSLValue>;

/**
 * All color types with their state values
 */
export type ColorsConfig = Record<ColorType, ColorValues>;

/**
 * Text Color Headings
 */
export type TextHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingColors = Record<TextHeading, HSLValue>;

/**
 * Text Color Roles - Different semantic roles for text
 */
export type TextRole = 'paragraph' | 'small' | 'caption' | 'normal' | 'primary' | 'secondary' | 'disabled' | 'button' | 'placeholder';

export type RoleColors = Record<TextRole, HSLValue>;

/**
 * Link States
 */
export type LinkState = 'default' | 'hover' | 'focus' | 'visited' | 'disabled';

export type LinkColors = Record<LinkState, HSLValue>;

/**
 * Inverse Colors - For text on dark/light backgrounds
 */
export type InverseTarget = 'heading' | 'normal' | 'link';

export type InverseColors = Record<InverseTarget, HSLValue>;

/**
 * Code Colors
 */
export type CodeType = 'inline' | 'block';

export type CodeColors = Record<CodeType, HSLValue>;

/**
 * Complete Text Color Configuration
 */
export interface TextColors {
  heading: HeadingColors;
  roles: RoleColors;
  link: LinkColors;
  inverse: InverseColors;
  code: CodeColors;
}

/**
 * Theme Theme Color Config structure from JSON
 */
export interface ThemeColors {
  primary: ColorValues;
  secondary: ColorValues;
  accent: ColorValues;
  muted: ColorValues;
  solid: ColorValues;
  input: ColorValues;
  surface: ColorValues;
  container: ColorValues;
  text: TextColors;
}

/**
 * Individual Theme Definition
 */
export interface ColorTheme {
  id: string;
  name: string;
  icon_name: string;
  enabled: boolean;
  colors: ThemeColors[];
}

/**
 * Complete Colors Configuration from colors.json
 */
export interface ColorsConfigFile {
  version: string;
  defaults: {
    theme: string;
    text: string;
  };
  themes: ColorTheme[];
}

/**
 * Semantic Color IDs
 */
export type SemanticColorId = 'success' | 'warning' | 'destructive' | 'info' | 'neutral';

/**
 * Semantic Color Definition
 */
export interface SemanticColor {
  id: SemanticColorId;
  icon: string;
  enabled: boolean;
  colors: ColorValues;
}

/**
 * Complete Semantic Colors Configuration from semantic.json
 */
export interface SemanticConfigFile {
  semantic: SemanticColor[];
}

/**
 * CSS Variable Names - Auto-generated from color types and states
 * Format: --{colorType}-{state}
 * Example: --primary-base, --primary-hover, --muted-foreground
 */
export type CSSColorVariable = string;

/**
 * CSS Variable Map
 * All color types generate 7 CSS variables (one per state)
 */
export type ColorVariables = Record<CSSColorVariable, HSLValue>;

/**
 * Exported Color Context Value Type
 */
export interface ColorContextValue {
  colors: ColorContextValue;
  variables: ColorVariables;
  currentTheme: string;
  setTheme: (themeId: string) => void;
}
