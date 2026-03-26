/**
 * Avatar Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import { Avatar, AvatarImage, AvatarFallback } from '@/ui/handlers/avatar';

const AVATAR_TYPES = ['default'];

export function AvatarShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Avatar"
      availableTypes={AVATAR_TYPES}
      defaultType="default"
      columns={5}
      renderComponent={({ version, variant, effects }) => (
        <Avatar
          version={version}
          variant={variant}
          effects={effects}
        >
          <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )}
    />
  );
}

export default AvatarShowcase;
