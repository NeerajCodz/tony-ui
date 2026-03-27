/**
 * Command Showcase
 */

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/ui/handlers/command';
import { ShowcaseTemplate } from '../_components';

const COMMAND_TYPES = ['default', 'palette'];

export function CommandShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Command"
      availableTypes={COMMAND_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, variant, effects }) => (
        <Command version={version} variant={variant} effects={effects} className="rounded-lg border shadow-md">
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      )}
    />
  );
}

export default CommandShowcase;
