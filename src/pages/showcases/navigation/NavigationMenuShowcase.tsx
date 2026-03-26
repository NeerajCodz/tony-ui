/**
 * NavigationMenu Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/ui/handlers/navigation-menu';

const NAV_MENU_TYPES = ['default', 'horizontal'];

export function NavigationMenuShowcase() {
  return (
    <ShowcaseTemplate
      componentName="NavigationMenu"
      availableTypes={NAV_MENU_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, variant, effects }) => (
        <NavigationMenu version={version} variant={variant} effects={effects}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
                <NavigationMenuLink href="/featured">Featured</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about">About</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    />
  );
}

export default NavigationMenuShowcase;
