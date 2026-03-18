/**
 * Pagination Component
 */
import React from 'react';
import type { PaginationProps } from '../../types/components/navigation.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Pagination: React.FC<PaginationProps> = ({
  version = 'default', type: styleType = 'default', variant = 'primary',
  colorType = 'primary', animated = true, currentPage, totalPages,
  onPageChange, siblingCount = 1, className = '',
}) => {
  const activeColor = resolveColorType(variant, colorType);

  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  let pages: (number | string)[];
  if (version === 'simple') {
    pages = [];
  } else {
    const start = Math.max(1, currentPage - siblingCount);
    const end = Math.min(totalPages, currentPage + siblingCount);
    pages = [];
    if (start > 1) { pages.push(1); if (start > 2) pages.push('...'); }
    pages.push(...range(start, end));
    if (end < totalPages) { if (end < totalPages - 1) pages.push('...'); pages.push(totalPages); }
  }

  const btnStyle = (active = false, disabled = false): React.CSSProperties => ({
    minWidth: '32px', height: '32px', padding: '0 8px', fontSize: '13px', fontWeight: active ? '600' : '400',
    border: `1px solid ${getColorVar(activeColor, active ? 'base' : 'border')}`,
    backgroundColor: active ? getColorVar(activeColor, 'base') : 'transparent',
    color: getColorVar(activeColor, 'foreground'), borderRadius: '6px',
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
    transition: animated ? 'all 150ms ease-in-out' : 'none', outline: 'none', fontFamily: 'inherit',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  });

  return (
    <nav className={`ui-pagination ui-pagination-${version} ${className}`} aria-label="pagination"
      style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      <button type="button" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1} style={btnStyle(false, currentPage <= 1)}>‹</button>
      {version === 'simple' ? (
        <span style={{ padding: '0 12px', fontSize: '13px', color: getColorVar(activeColor, 'foreground') }}>
          {currentPage} / {totalPages}
        </span>
      ) : (
        pages.map((p, i) =>
          typeof p === 'string' ? (
            <span key={`e${i}`} style={{ padding: '0 4px', color: getColorVar(activeColor, 'border') }}>{p}</span>
          ) : (
            <button key={p} type="button" onClick={() => onPageChange(p)} style={btnStyle(p === currentPage)}>{p}</button>
          )
        )
      )}
      <button type="button" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage >= totalPages} style={btnStyle(false, currentPage >= totalPages)}>›</button>
    </nav>
  );
};

export { Pagination };
export default Pagination;
