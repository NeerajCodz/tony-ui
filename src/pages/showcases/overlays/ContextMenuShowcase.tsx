/**
 * ContextMenu Showcase
 */

import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/ui/handlers/context-menu';
import { ShowcaseTemplate } from '../_components';

const CONTEXT_MENU_TYPES = ['default'];

export function ContextMenuShowcase() {
  return (
    <ShowcaseTemplate
      componentName="ContextMenu"
      availableTypes={CONTEXT_MENU_TYPES}
      defaultType="default"
      columns={4}
      renderComponent={({ version, variant, effects }) => (
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[80px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent version={version} variant={variant} effects={effects}>
            <ContextMenuItem>Copy</ContextMenuItem>
            <ContextMenuItem>Paste</ContextMenuItem>
            <ContextMenuItem>Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      )}
    />
  );
}

export default ContextMenuShowcase;
