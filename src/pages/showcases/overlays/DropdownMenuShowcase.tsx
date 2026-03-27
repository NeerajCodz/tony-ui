/**
 * DropdownMenu Showcase
 */

import { Button } from '@/ui/handlers/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/ui/handlers/dropdown-menu';
import { ShowcaseTemplate } from '../_components';

const DROPDOWN_TYPES = ['default', 'context'];

export function DropdownMenuShowcase() {
  return (
    <ShowcaseTemplate
      componentName="DropdownMenu"
      availableTypes={DROPDOWN_TYPES}
      defaultType="default"
      columns={5}
      renderComponent={({ version, variant, effects }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button version={version} variant="outline" size="sm">
              Open Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent version={version} variant={variant} effects={effects}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    />
  );
}

export default DropdownMenuShowcase;
