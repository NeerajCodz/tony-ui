'use client';

import { createAvatarFoundation } from '../_shared/family-foundations';

const foundation = createAvatarFoundation('angular-corner');

export const Avatar = foundation.Avatar;
export const AvatarRoot = foundation.AvatarRoot;
export const AvatarImage = foundation.AvatarImage;
export const AvatarFallback = foundation.AvatarFallback;

export default Avatar;
