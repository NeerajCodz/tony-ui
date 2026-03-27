/**
 * Avatar Showcase
 */

import { Avatar, AvatarFallback, AvatarImage } from '@/ui/handlers/avatar';
import { ShowcaseTemplate } from '../_components';

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
