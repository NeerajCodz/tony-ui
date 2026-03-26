import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { Variant } from '../../types/common';

import { getVariantColors } from '../handler-factory';
import { VariantStyleProvider, createVariantCssVariables } from '../variant-style-provider';
import { normalizeVariantColors, resolveColorToken } from '../color-token-resolver';
import { getVersionCssVariables } from '../version-token-loader';

test('resolveColorToken maps known palette tokens to hex colors', () => {
  assert.equal(resolveColorToken('var(--green-500)'), '#22c55e');
  assert.equal(resolveColorToken('var(--slate-800)'), '#1e293b');
  assert.equal(resolveColorToken('var(--cyan-500)'), '#06b6d4');
});

test('resolveColorToken uses fallback when token is unknown', () => {
  assert.equal(resolveColorToken('var(--unknown-token, #123456)'), '#123456');
});

test('normalizeVariantColors resolves nested color token objects', () => {
  const normalized = normalizeVariantColors({
    background: 'var(--emerald-900)',
    border: 'var(--green-600)',
    icon: {
      color: 'var(--green-400)',
      colorHover: 'var(--green-300)',
    },
    accent: {
      primary: 'var(--green-500)',
      secondary: 'var(--emerald-600)',
      glow: 'var(--green-400)',
    },
  });

  assert.equal(normalized.background, '#064e3b');
  assert.equal(normalized.border, '#16a34a');
  assert.equal(normalized.icon?.color, '#4ade80');
  assert.equal(normalized.accent?.primary, '#22c55e');
});

test('all variant json colors are normalized to concrete values', () => {
  const variantsDir = path.resolve(process.cwd(), 'src', 'ui', 'config', 'variants');
  const files = fs.readdirSync(variantsDir).filter((name) => name.endsWith('.json'));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(variantsDir, file), 'utf8');
    const json = JSON.parse(raw) as { colors?: Record<string, unknown> };
    const normalized = normalizeVariantColors(json.colors ?? {});

    const serialized = JSON.stringify(normalized);
    assert.equal(
      serialized.includes('var(--'),
      false,
      `variant ${file} still contains unresolved CSS var token after normalization`
    );
  }
});

test('getVariantColors returns normalized values for semantic variants', () => {
  const variants = ['default', 'success', 'warning', 'destructive', 'info'] as const;

  for (const variant of variants) {
    const colors = getVariantColors(variant);
    const serialized = JSON.stringify(colors);
    assert.equal(
      serialized.includes('var(--'),
      false,
      `getVariantColors(${variant}) returned unresolved token`
    );
  }
});

test('VariantStyleProvider injects resolved CSS variables used by showcase components', () => {
  const html = renderToStaticMarkup(
    <VariantStyleProvider variant="success">
      <button>Button</button>
    </VariantStyleProvider>
  );

  assert.match(html, /--df-accent:\s*#22c55e/i);
  assert.match(html, /--df-surface:\s*#064e3b/i);
  assert.match(html, /--df-text:\s*#dcfce7/i);
  assert.equal(html.includes('var(--'), false);
});

test('createVariantCssVariables defines full df alias set used by components', () => {
  const vars = createVariantCssVariables('warning');
  const typedVars = vars as Record<string, string>;
  const requiredKeys = [
    '--df-accent',
    '--df-accent-foreground',
    '--df-background',
    '--df-bg',
    '--df-border',
    '--df-destructive',
    '--df-error',
    '--df-foreground',
    '--df-muted',
    '--df-muted-foreground',
    '--df-muted-text',
    '--df-ring',
    '--df-secondary',
    '--df-success',
    '--df-surface',
    '--df-text',
    '--df-warning',
  ];

  for (const key of requiredKeys) {
    assert.ok(typedVars[key], `missing css variable ${key}`);
    assert.equal(
      typedVars[key].includes('var(--'),
      false,
      `${key} should be resolved to concrete color`
    );
  }
});

test('all showcase default variants have full concrete css var map', () => {
  const defaults: Variant[] = [
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'destructive',
    'info',
    'neutral',
  ];

  for (const variant of defaults) {
    const vars = createVariantCssVariables(variant) as Record<string, string>;
    assert.equal(
      Object.values(vars).some((value) => value.includes('var(--')),
      false,
      `${variant} produced unresolved token`
    );
    assert.ok(vars['--df-accent'], `${variant} missing --df-accent`);
    assert.ok(vars['--df-text'], `${variant} missing --df-text`);
    assert.ok(vars['--df-border'], `${variant} missing --df-border`);
  }
});

test('global df aliases are present in ColorProvider source', () => {
  const providerPath = path.resolve(process.cwd(), 'src', 'ui', 'providers', 'ColorProvider.tsx');
  const source = fs.readFileSync(providerPath, 'utf8');

  const expectedAliases = [
    '--df-accent',
    '--df-accent-foreground',
    '--df-background',
    '--df-bg',
    '--df-border',
    '--df-destructive',
    '--df-error',
    '--df-foreground',
    '--df-muted',
    '--df-muted-foreground',
    '--df-muted-text',
    '--df-ring',
    '--df-secondary',
    '--df-success',
    '--df-surface',
    '--df-text',
    '--df-warning',
  ];

  for (const alias of expectedAliases) {
    assert.equal(
      source.includes(alias),
      true,
      `ColorProvider missing expected alias ${alias}`
    );
  }
});

test('version token loader provides required namespaced tokens', () => {
  const tech = getVersionCssVariables('tech-panel');
  assert.equal(Boolean(tech['--tp-bg']), true);
  assert.equal(Boolean(tech['--tp-accent']), true);

  const glass = getVersionCssVariables('glass-morphism');
  assert.equal(Boolean(glass['--gl-glass-bg']), true);
  assert.equal(Boolean(glass['--gl-accent']), true);

  const angular = getVersionCssVariables('angular-corner');
  assert.equal(Boolean(angular['--ac-bg']), true);
  assert.equal(Boolean(angular['--ac-accent']), true);
});

test('version token loader maps token-schema configs into namespaced css vars', () => {
  const large = getVersionCssVariables('large');
  assert.equal(Boolean(large['--lg-bg']), true);
  assert.equal(Boolean(large['--lg-surface']), true);
  assert.equal(Boolean(large['--lg-accent']), true);
  assert.equal(Boolean(large['--lg-text']), true);
  assert.equal(Boolean(large['--lg-text-dim']), true);

  const matrix = getVersionCssVariables('matrix-grid');
  assert.equal(Boolean(matrix['--mg-bg']), true);
  assert.equal(Boolean(matrix['--mg-grid']), true);
  assert.equal(Boolean(matrix['--mg-grid-bright']), true);
});

test('VariantStyleProvider outputs both df and version token css vars', () => {
  const html = renderToStaticMarkup(
    <VariantStyleProvider variant="primary" version="tech-panel">
      <button>Button</button>
    </VariantStyleProvider>
  );

  assert.equal(html.includes('--df-accent:'), true);
  assert.equal(html.includes('--tp-bg:'), true);
  assert.equal(html.includes('--tp-accent:'), true);
});
