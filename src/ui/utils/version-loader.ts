import type { Version } from '../types/common';

export type VersionComponent = {
  default: any;
};

export async function loadVersionComponent(
  componentName: string,
  version: Version
): Promise<VersionComponent> {
  try {
    const component = await import(`../components/${version}/${componentName}.tsx`);
    return component;
  } catch (error) {
    console.error(`Failed to load ${componentName} for version ${version}:`, error);
    throw new Error(`Component ${componentName} not found for version ${version}`);
  }
}

export async function getAvailableVersions(componentName: string): Promise<Version[]> {
  const versions: Version[] = [
    'angular-corner',
    'holo-frame',
    'data-panel',
    'circuit-board',
    'quantum-gate',
    'tactical-hud',
    'energy-shield',
    'terminal-window',
    'matrix-grid',
    'neon-outline',
  ];

  const available: Version[] = [];
  
  for (const version of versions) {
    try {
      await import(`../components/${version}/${componentName}.tsx`);
      available.push(version);
    } catch {
      // Component not available in this version
    }
  }
  
  return available;
}
