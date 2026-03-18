/**
 * Breadcrumb Component
 */
import React from 'react';
import type { BreadcrumbProps } from '../../types/components/navigation.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  version = 'default', type: styleType = 'default', variant = 'neutral',
  colorType = 'primary', animated = true, items, separator, className = '',
}) => {
  const activeColor = resolveColorType(variant, colorType);
  const sep = separator || (version === 'arrow' ? '›' : version === 'dot' ? '·' : '/');

  return (
    <nav className={`ui-breadcrumb ui-breadcrumb-${version} ${className}`} aria-label="breadcrumb"
      style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }} data-version={version}>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <span style={{ color: getColorVar(activeColor, 'border'), margin: '0 2px' }}>{sep}</span>}
          {item.href || item.onClick ? (
            <a href={item.href} onClick={(e) => { if (item.onClick) { e.preventDefault(); item.onClick(); } }}
              style={{
                color: item.active ? getColorVar(activeColor, 'foreground') : getColorVar(activeColor, 'base'),
                textDecoration: 'none', fontWeight: item.active ? '600' : '400',
                transition: animated ? 'color 150ms' : 'none', cursor: 'pointer',
              }}>
              {item.label}
            </a>
          ) : (
            <span style={{
              color: item.active ? getColorVar(activeColor, 'foreground') : getColorVar(activeColor, 'border'),
              fontWeight: item.active ? '600' : '400',
            }}>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export { Breadcrumb };
export default Breadcrumb;
