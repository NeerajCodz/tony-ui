/**
 * Avatar Component
 */
import React, { useState } from 'react';
import type { AvatarProps } from '../../types/components/data-display.js';
import { getColorVar, resolveColorType } from '../../utils/component-helpers.js';

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({
  version = 'default', type: styleType = 'default', variant = 'primary',
  colorType = 'primary', animated = true, src, alt = '', fallback,
  size = 'md', className = '',
}, ref) => {
  const [imgError, setImgError] = useState(false);
  const activeColor = resolveColorType(variant, colorType);

  const sizeMap: Record<string, number> = { sm: 32, md: 40, lg: 56, xl: 72 };
  const s = sizeMap[size] || 40;

  const initials = fallback || (alt ? alt.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() : '?');

  return (
    <div ref={ref} className={`ui-avatar ui-avatar-${version} ${className}`} style={{
      width: s, height: s, borderRadius: version === 'square' ? '8px' : '50%',
      overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: getColorVar(activeColor, 'background'),
      border: version === 'ring' ? `3px solid ${getColorVar(activeColor, 'base')}` : 'none',
      fontSize: s * 0.4, fontWeight: '600', color: getColorVar(activeColor, 'foreground'),
      flexShrink: 0, transition: animated ? 'all 150ms ease-in-out' : 'none',
    }} data-version={version} data-variant={variant}>
      {src && !imgError ? (
        <img src={src} alt={alt} onError={() => setImgError(true)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
});

Avatar.displayName = 'Avatar';
export { Avatar };
export default Avatar;
