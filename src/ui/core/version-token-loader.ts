import type { Version } from '../types/common';

import angularCornerConfig from '../config/components/angular-corner.json';
import borderConfig from '../config/components/border.json';
import circuitBoardConfig from '../config/components/circuit-board.json';
import compactConfig from '../config/components/compact.json';
import dataPanelConfig from '../config/components/data-panel.json';
import defaultConfig from '../config/components/default.json';
import energyShieldConfig from '../config/components/energy-shield.json';
import ghostConfig from '../config/components/ghost.json';
import glassMorphismConfig from '../config/components/glass-morphism.json';
import holoFrameConfig from '../config/components/holo-frame.json';
import honeyCombConfig from '../config/components/honey-comb.json';
import largeConfig from '../config/components/large.json';
import matrixGridConfig from '../config/components/matrix-grid.json';
import neonConfig from '../config/components/neon.json';
import paddingConfig from '../config/components/padding.json';
import quantumGateConfig from '../config/components/quantum-gate.json';
import raisedConfig from '../config/components/raised.json';
import tacticalHudConfig from '../config/components/tactical-hud.json';
import techPanelConfig from '../config/components/tech-panel.json';
import terminalWindowConfig from '../config/components/terminal-window.json';

type RawComponentConfig =
  | { theme?: Record<string, string>; tokens?: { colors?: Record<string, string> } }
  | Record<string, string>;

const VERSION_CONFIGS: Record<string, RawComponentConfig> = {
  'angular-corner': angularCornerConfig as RawComponentConfig,
  border: borderConfig as RawComponentConfig,
  'circuit-board': circuitBoardConfig as RawComponentConfig,
  compact: compactConfig as RawComponentConfig,
  'data-panel': dataPanelConfig as RawComponentConfig,
  default: defaultConfig as RawComponentConfig,
  'energy-shield': energyShieldConfig as RawComponentConfig,
  ghost: ghostConfig as RawComponentConfig,
  'glass-morphism': glassMorphismConfig as RawComponentConfig,
  'holo-frame': holoFrameConfig as RawComponentConfig,
  'honey-comb': honeyCombConfig as RawComponentConfig,
  large: largeConfig as RawComponentConfig,
  'matrix-grid': matrixGridConfig as RawComponentConfig,
  neon: neonConfig as RawComponentConfig,
  padding: paddingConfig as RawComponentConfig,
  'quantum-gate': quantumGateConfig as RawComponentConfig,
  raised: raisedConfig as RawComponentConfig,
  'tactical-hud': tacticalHudConfig as RawComponentConfig,
  'tech-panel': techPanelConfig as RawComponentConfig,
  'terminal-window': terminalWindowConfig as RawComponentConfig,
};

const resolvedCache = new Map<string, Record<string, string>>();

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function normalizeCssVariableValue(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return trimmed;

  if (
    trimmed.startsWith('#') ||
    trimmed.startsWith('rgb(') ||
    trimmed.startsWith('rgba(') ||
    trimmed.startsWith('hsl(') ||
    trimmed.startsWith('hsla(') ||
    trimmed.startsWith('var(') ||
    trimmed.startsWith('linear-gradient(') ||
    trimmed.startsWith('radial-gradient(') ||
    trimmed.endsWith('px') ||
    trimmed.endsWith('rem') ||
    trimmed.endsWith('em') ||
    trimmed.endsWith('ms') ||
    trimmed.endsWith('s')
  ) {
    return trimmed;
  }

  if (/^-?\d+(\.\d+)?\s+-?\d+(\.\d+)?%\s+-?\d+(\.\d+)?%(\s*\/\s*[\d.]+%?)?$/.test(trimmed)) {
    return `hsl(${trimmed})`;
  }

  return trimmed;
}

function versionPrefix(version: string): string {
  const prefixes: Record<string, string> = {
    'angular-corner': 'ac',
    border: 'br',
    'circuit-board': 'cb',
    compact: 'cp',
    'data-panel': 'dp',
    default: 'df',
    'energy-shield': 'es',
    ghost: 'gh',
    'glass-morphism': 'gl',
    'holo-frame': 'hf',
    'honey-comb': 'hc',
    large: 'lg',
    'matrix-grid': 'mg',
    neon: 'ne',
    padding: 'pd',
    'quantum-gate': 'qg',
    raised: 'ra',
    'tactical-hud': 'th',
    'tech-panel': 'tp',
    'terminal-window': 'tm',
  };
  return prefixes[version] ?? 'df';
}

function mapUnprefixedToken(version: string, key: string): string {
  const prefix = versionPrefix(version);

  const generic: Record<string, string> = {
    background: `--${prefix}-bg`,
    surface: `--${prefix}-surface`,
    border: `--${prefix}-border`,
    accent: `--${prefix}-accent`,
    'text-primary': `--${prefix}-text`,
    'text-secondary': `--${prefix}-text-dim`,
    'text-muted': `--${prefix}-text-dim`,
    grid: `--${prefix}-grid`,
    'grid-bright': `--${prefix}-grid-bright`,
  };

  return generic[key] ?? `--${prefix}-${key}`;
}

function extractRawTokenMap(version: string, config: RawComponentConfig): Record<string, string> {
  let source: Record<string, string> = {};

  if (isObject(config) && isObject(config.theme)) {
    source = config.theme as Record<string, string>;
  } else if (isObject(config) && isObject(config.tokens) && isObject(config.tokens.colors)) {
    source = config.tokens.colors as Record<string, string>;
  } else if (isObject(config)) {
    source = config as Record<string, string>;
  }

  const mapped: Record<string, string> = {};
  for (const [rawKey, rawValue] of Object.entries(source)) {
    if (typeof rawValue !== 'string') continue;

    const cssVarName = rawKey.startsWith('--') ? rawKey : mapUnprefixedToken(version, rawKey);
    mapped[cssVarName] = normalizeCssVariableValue(rawValue);
  }

  return mapped;
}

export function getVersionCssVariables(version: Version | string): Record<string, string> {
  const key = String(version);
  if (resolvedCache.has(key)) {
    return resolvedCache.get(key)!;
  }

  const config = VERSION_CONFIGS[key] ?? VERSION_CONFIGS.default;
  const extracted = extractRawTokenMap(key, config);
  resolvedCache.set(key, extracted);
  return extracted;
}

export function clearVersionCssVariablesCache(): void {
  resolvedCache.clear();
}
