import React, { useState } from 'react';
import { NavigationMenu } from '../../ui';
import { cn } from '../../lib/utils';

export function NavigationMenuPage() {
  const versions = [
    'angular-corner',
    'holo-frame',
    'data-panel',
    'circuit-board',
    'quantum-gate',
    'tactical-hud',
    'energy-shield',
    'terminal-window',
    'matrix-grid',
    'neon',
  ];

  const variants = ['neutral', 'primary', 'success', 'warning', 'info', 'destructive'];
  const types = ['default', 'outline', 'solid', 'ghost'];

  const [currentVariant, setCurrentVariant] = useState<any>('primary');
  const [currentType, setCurrentType] = useState<any>('default');

  return (
    <div className='min-h-screen bg-gray-950 text-white p-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-12'>
          <h1 className='text-4xl font-bold mb-4 text-cyan-400 font-mono tracking-tighter'>
            Navigation Menu <span className='text-gray-600 text-2xl'>// Component Showcase</span>
          </h1>
          <p className='text-gray-400 max-w-2xl'>
            Cyber-aesthetic versions of the Navigation Menu component. 
            Fully dynamic with 10 unique geometric styles.
          </p>
        </div>

        <div className='sticky top-4 z-10 bg-gray-900/90 backdrop-blur border border-gray-800 p-4 rounded-xl mb-8 shadow-2xl flex flex-wrap gap-6 items-center'>
          <div>
            <label className='block text-xs font-mono text-cyan-500 mb-1'>VARIANT</label>
            <select 
              value={currentVariant}
              onChange={(e) => setCurrentVariant(e.target.value)}
              className='bg-gray-950 border border-gray-700 rounded px-3 py-1 text-sm focus:border-cyan-500 outline-none min-w-[120px]'
            >
              {variants.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label className='block text-xs font-mono text-cyan-500 mb-1'>TYPE</label>
            <select 
              value={currentType}
              onChange={(e) => setCurrentType(e.target.value)}
              className='bg-gray-950 border border-gray-700 rounded px-3 py-1 text-sm focus:border-cyan-500 outline-none min-w-[120px]'
            >
              {types.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-16 pb-32'>
          {versions.map(version => (
            <div key={version} className='p-8 border border-gray-800 rounded-lg bg-gray-900/50 flex flex-col gap-8 min-h-[300px]'>
              <h3 className='text-lg font-mono text-cyan-400 border-b border-gray-800 pb-2'>{version}</h3>
              <div className='flex justify-center w-full'>
                 <NavigationMenu 
                  version={version} 
                  variant={currentVariant}
                  type={currentType}
                >
                  <NavigationMenu.List>
                    <NavigationMenu.Item>
                      <NavigationMenu.Trigger>Getting Started</NavigationMenu.Trigger>
                      <NavigationMenu.Content>
                        <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                          <li className='row-span-3'>
                            <NavigationMenu.Link asChild>
                              <a
                                className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-cyan-500/10 to-cyan-500/30 p-6 no-underline outline-none focus:shadow-md'
                                href='/'
                              >
                                <div className='mb-2 mt-4 text-lg font-medium text-cyan-400'>
                                  Cyber UI
                                </div>
                                <p className='text-sm leading-tight text-gray-400'>
                                  Next-generation interface components for React applications.
                                </p>
                              </a>
                            </NavigationMenu.Link>
                          </li>
                          <ListItem href='/docs' title='Introduction'>
                            Re-usable components built using Radix UI and Tailwind CSS.
                          </ListItem>
                          <ListItem href='/docs/installation' title='Installation'>
                            How to install dependencies and structure your app.
                          </ListItem>
                          <ListItem href='/docs/primitives/typography' title='Typography'>
                            Styles for headings, paragraphs, lists...etc
                          </ListItem>
                        </ul>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
                      <NavigationMenu.Content>
                        <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                          {components.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <NavigationMenu.Link className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground' href='/docs'>
                        Documentation
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>
                  </NavigationMenu.List>
                  <NavigationMenu.Viewport />
                </NavigationMenu>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const components = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none text-cyan-400'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-gray-500'>
            {children}
          </p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
})
ListItem.displayName = 'ListItem'
