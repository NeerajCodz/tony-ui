/**
 * Table Component
 */
import React from 'react';
import type { TableProps } from '../../types/components/data-display.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

function Table<T extends Record<string, any>>({
  version = 'default', type: styleType = 'default', variant = 'neutral',
  colorType = 'primary', animated = true, columns, data, className = '',
  headerClassName = '', rowClassName, onRowClick,
}: TableProps<T>) {
  const activeColor = resolveColorType(variant, colorType);

  return (
    <div className={`ui-table-wrapper ${className}`} style={{ overflowX: 'auto', borderRadius: '8px',
      border: version === 'bordered' ? `1px solid ${getColorVar(activeColor, 'border')}` : 'none' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
        <thead>
          <tr className={headerClassName} style={{
            borderBottom: `2px solid ${getColorVar(activeColor, 'border')}`,
          }}>
            {columns.map(col => (
              <th key={col.key} style={{
                padding: version === 'compact' ? '6px 10px' : '10px 14px', textAlign: (col.align as any) || 'left',
                fontWeight: '600', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.04em',
                color: getColorVar(activeColor, 'foreground'), whiteSpace: 'nowrap',
                width: col.width,
              }}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => {
            const rcn = typeof rowClassName === 'function' ? rowClassName(row, idx) : rowClassName || '';
            return (
              <tr key={idx} className={rcn}
                onClick={() => onRowClick?.(row, idx)}
                style={{
                  borderBottom: `1px solid ${getColorVar(activeColor, 'border')}`,
                  backgroundColor: version === 'striped' && idx % 2 === 1 ? getColorVar(activeColor, 'background') : 'transparent',
                  cursor: onRowClick ? 'pointer' : undefined,
                  transition: animated ? 'background-color 100ms' : 'none',
                }}
                onMouseEnter={(e) => { if (onRowClick) (e.currentTarget.style.backgroundColor = getColorVar(activeColor, 'hover')); }}
                onMouseLeave={(e) => { (e.currentTarget.style.backgroundColor = version === 'striped' && idx % 2 === 1 ? getColorVar(activeColor, 'background') : 'transparent'); }}
              >
                {columns.map(col => (
                  <td key={col.key} style={{
                    padding: version === 'compact' ? '6px 10px' : '10px 14px',
                    textAlign: (col.align as any) || 'left',
                    color: getColorVar(activeColor, 'foreground'),
                  }}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export { Table };
export default Table;
