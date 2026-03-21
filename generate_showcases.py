"""
Generate all 60 showcase component files
"""

COMPONENTS_DATA = [
    ('badge', 'Badge', 'Badge', '''<Badge
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                >
                  ACTIVE
                </Badge>
                <Badge version={version} variant="success">ONLINE</Badge>
                <Badge version={version} variant="warning">PENDING</Badge>''', 'Status indicators and labels'),
    
    ('breadcrumb', 'Breadcrumb', 'Breadcrumb', '''<Breadcrumb version={version} variant={controls.variant} type={controls.type}>
                  <Breadcrumb.List>
                    <Breadcrumb.Item>
                      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                      <Breadcrumb.Link href="/docs">Docs</Breadcrumb.Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                      <Breadcrumb.Page>Components</Breadcrumb.Page>
                    </Breadcrumb.Item>
                  </Breadcrumb.List>
                </Breadcrumb>''', 'Navigation breadcrumb trail'),
    
    ('button-group', 'Button Group', 'ButtonGroup', '''<ButtonGroup version={version} variant={controls.variant} type={controls.type}>
                  <Button version={version}>Left</Button>
                  <Button version={version}>Center</Button>
                  <Button version={version}>Right</Button>
                </ButtonGroup>''', 'Grouped button actions', ['Button']),
    
    ('button', 'Button', 'Button', '''<Button
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                >
                  Execute Command
                </Button>''', 'Interactive button component'),
    
    ('calendar', 'Calendar', 'Calendar', '''<Calendar
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  mode="single"
                  className="rounded-md border"
                />''', 'Date selection calendar'),
    
    ('card', 'Card', 'Card', '''<Card
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  className="w-full"
                >
                  <CardHeader>
                    <CardTitle>Neural Network Status</CardTitle>
                    <CardDescription>System performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Processing power: 94%</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-xs text-muted-foreground">Last updated: 2m ago</p>
                  </CardFooter>
                </Card>''', 'Container with header, content, and footer', ['CardHeader', 'CardTitle', 'CardDescription', 'CardContent', 'CardFooter']),
    
    ('carousel', 'Carousel', 'Carousel', '''<Carousel version={version} variant={controls.variant} type={controls.type} className="w-full max-w-xs">
                  <Carousel.Content>
                    <Carousel.Item>
                      <div className="p-4 text-center">Slide 1</div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="p-4 text-center">Slide 2</div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="p-4 text-center">Slide 3</div>
                    </Carousel.Item>
                  </Carousel.Content>
                  <Carousel.Previous />
                  <Carousel.Next />
                </Carousel>''', 'Image and content carousel'),
    
    ('chart', 'Chart', 'Chart', '''<Chart version={version} variant={controls.variant} type={controls.type}>
                  <Chart.Container className="h-32 w-full rounded border border-cyan-500/20 p-3">
                    <div className="text-xs text-cyan-400">
                      Data visualization component
                    </div>
                  </Chart.Container>
                </Chart>''', 'Data visualization and charts'),
    
    ('checkbox', 'Checkbox', 'Checkbox', '''<div className="flex items-center gap-2">
                  <Checkbox
                    version={version}
                    variant={controls.variant}
                    type={controls.type}
                    id={`checkbox-${version}`}
                  />
                  <label htmlFor={`checkbox-${version}`} className="text-sm">
                    Accept terms
                  </label>
                </div>''', 'Checkbox input with label'),
    
    ('collapsible', 'Collapsible', 'Collapsible', '''<Collapsible version={version} variant={controls.variant} type={controls.type}>
                  <Collapsible.Trigger className="flex items-center gap-2 rounded border border-cyan-500/30 px-3 py-2 text-sm">
                    Toggle Details
                  </Collapsible.Trigger>
                  <Collapsible.Content className="pt-2 text-sm opacity-80">
                    Additional information revealed on toggle
                  </Collapsible.Content>
                </Collapsible>''', 'Collapsible content section'),
    
    ('combobox', 'Combobox', 'Combobox', '''<Combobox
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  options={[
                    { value: 'next', label: 'Next.js' },
                    { value: 'react', label: 'React' },
                    { value: 'vue', label: 'Vue' },
                  ]}
                  placeholder="Select framework..."
                />''', 'Searchable select with autocomplete'),
    
    ('command', 'Command', 'Command', '''<Command version={version} variant={controls.variant} type={controls.type} className="rounded-lg border">
                  <Command.Input placeholder="Search command..." />
                  <Command.List>
                    <Command.Empty>No results found.</Command.Empty>
                    <Command.Group heading="Suggestions">
                      <Command.Item>Calendar</Command.Item>
                      <Command.Item>Search Emoji</Command.Item>
                    </Command.Group>
                  </Command.List>
                </Command>''', 'Command palette interface'),
    
    ('context-menu', 'Context Menu', 'ContextMenu', '''<ContextMenu version={version} variant={controls.variant} type={controls.type}>
                  <ContextMenu.Trigger className="rounded border border-cyan-500/50 px-4 py-2 text-sm">
                    Right click here
                  </ContextMenu.Trigger>
                  <ContextMenu.Content>
                    <ContextMenu.Item>Edit</ContextMenu.Item>
                    <ContextMenu.Item>Copy</ContextMenu.Item>
                    <ContextMenu.Separator />
                    <ContextMenu.Item>Delete</ContextMenu.Item>
                  </ContextMenu.Content>
                </ContextMenu>''', 'Right-click context menu'),
    
    ('data-table', 'Data Table', 'DataTable', '''<DataTable
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  columns={[
                    { accessorKey: 'name', header: 'Name' },
                    { accessorKey: 'status', header: 'Status' },
                  ]}
                  data={[
                    { name: 'Node Alpha', status: 'Active' },
                    { name: 'Node Beta', status: 'Standby' },
                  ]}
                />''', 'Advanced data table with sorting and filtering'),
    
    ('date-picker', 'Date Picker', 'DatePicker', '''<DatePicker
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                />''', 'Date selection input'),
    
    ('dialog', 'Dialog', 'Dialog', '''<Dialog version={version} variant={controls.variant} type={controls.type}>
                  <Dialog.Trigger asChild>
                    <Button version={version} variant={controls.variant}>
                      Open Settings
                    </Button>
                  </Dialog.Trigger>
                  <Dialog.Content>
                    <Dialog.Header>
                      <Dialog.Title>System Settings</Dialog.Title>
                      <Dialog.Description>
                        Configure your application preferences
                      </Dialog.Description>
                    </Dialog.Header>
                    <div className="py-4 text-sm">Dialog content here</div>
                    <Dialog.Footer>
                      <Dialog.Close>Close</Dialog.Close>
                    </Dialog.Footer>
                  </Dialog.Content>
                </Dialog>''', 'Modal dialog overlay', ['Button']),
    
    ('direction', 'Direction', 'Direction', '''<Direction version={version} variant={controls.variant} type={controls.type} dir="ltr">
                  <div className="text-sm">Left-to-right content</div>
                </Direction>''', 'Text direction wrapper'),
    
    ('drawer', 'Drawer', 'Drawer', '''<Drawer version={version} variant={controls.variant} type={controls.type}>
                  <Drawer.Trigger asChild>
                    <Button version={version} variant={controls.variant}>
                      Open Panel
                    </Button>
                  </Drawer.Trigger>
                  <Drawer.Content>
                    <Drawer.Header>
                      <Drawer.Title>Side Panel</Drawer.Title>
                      <Drawer.Description>
                        Additional information panel
                      </Drawer.Description>
                    </Drawer.Header>
                    <div className="p-4 text-sm">Panel content</div>
                    <Drawer.Footer>
                      <Drawer.Close>Close</Drawer.Close>
                    </Drawer.Footer>
                  </Drawer.Content>
                </Drawer>''', 'Slide-out side panel', ['Button']),
    
    ('dropdown-menu', 'Dropdown Menu', 'DropdownMenu', '''<DropdownMenu version={version} variant={controls.variant} type={controls.type}>
                  <DropdownMenu.Trigger asChild>
                    <Button version={version} variant={controls.variant}>
                      Actions
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item>Profile</DropdownMenu.Item>
                    <DropdownMenu.Item>Settings</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Logout</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu>''', 'Dropdown action menu', ['Button']),
    
    ('empty', 'Empty', 'Empty', '''<Empty
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  title="No data available"
                  description="Start by adding your first item"
                />''', 'Empty state placeholder'),
    
    ('field', 'Field', 'Field', '''<Field version={version} variant={controls.variant} type={controls.type}>
                  <Field.Label>Username</Field.Label>
                  <Field.Control>
                    <Input version={version} placeholder="Enter username" />
                  </Field.Control>
                  <Field.Description>Your unique identifier</Field.Description>
                  <Field.Error>Username is required</Field.Error>
                </Field>''', 'Form field with label and validation', ['Input']),
    
    ('hover-card', 'Hover Card', 'HoverCard', '''<HoverCard version={version} variant={controls.variant} type={controls.type}>
                  <HoverCardTrigger asChild>
                    <Button version={version} variant={controls.variant}>
                      Hover me
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="text-sm">
                      Additional information appears on hover
                    </div>
                  </HoverCardContent>
                </HoverCard>''', 'Hover-triggered popover', ['Button', 'HoverCardTrigger', 'HoverCardContent']),
    
    ('icon-button', 'Icon Button', 'IconButton', '''<IconButton
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  aria-label="Settings"
                >
                  <Settings className="h-4 w-4" />
                </IconButton>''', 'Button with icon only', [], ['Settings']),
    
    ('input-group', 'Input Group', 'InputGroup', '''<InputGroup version={version} variant={controls.variant} type={controls.type}>
                  <InputGroup.Prefix>$</InputGroup.Prefix>
                  <Input version={version} placeholder="0.00" />
                  <InputGroup.Suffix>USD</InputGroup.Suffix>
                </InputGroup>''', 'Input with prefix and suffix', ['Input']),
    
    ('input-otp', 'Input OTP', 'InputOtp', '''<InputOtp
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  maxLength={6}
                />''', 'One-time password input'),
    
    ('input', 'Input', 'Input', '''<Input
                  version={version}
                  variant={controls.variant}
                  type="text"
                  placeholder="Enter command..."
                />''', 'Text input field'),
    
    ('item', 'Item', 'Item', '''<Item
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                >
                  List item content
                </Item>''', 'Generic list item component'),
    
    ('kbd', 'Kbd', 'Kbd', '''<div className="flex items-center gap-2 text-sm">
                  Press <Kbd version={version} variant={controls.variant}>Ctrl</Kbd> +{' '}
                  <Kbd version={version} variant={controls.variant}>K</Kbd> to search
                </div>''', 'Keyboard shortcut display'),
    
    ('label', 'Label', 'Label', '''<div className="flex flex-col gap-2">
                  <Label version={version} variant={controls.variant} htmlFor="input">
                    Email address
                  </Label>
                  <Input version={version} id="input" placeholder="user@example.com" />
                </div>''', 'Form label component', ['Input']),
    
    ('menubar', 'Menubar', 'Menubar', '''<Menubar version={version} variant={controls.variant} type={controls.type}>
                  <Menubar.Menu>
                    <Menubar.Trigger>File</Menubar.Trigger>
                    <Menubar.Content>
                      <Menubar.Item>New</Menubar.Item>
                      <Menubar.Item>Open</Menubar.Item>
                      <Menubar.Separator />
                      <Menubar.Item>Exit</Menubar.Item>
                    </Menubar.Content>
                  </Menubar.Menu>
                  <Menubar.Menu>
                    <Menubar.Trigger>Edit</Menubar.Trigger>
                    <Menubar.Content>
                      <Menubar.Item>Cut</Menubar.Item>
                      <Menubar.Item>Copy</Menubar.Item>
                      <Menubar.Item>Paste</Menubar.Item>
                    </Menubar.Content>
                  </Menubar.Menu>
                </Menubar>''', 'Application menubar'),
    
    ('native-select', 'Native Select', 'NativeSelect', '''<NativeSelect
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                >
                  <option value="">Select option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </NativeSelect>''', 'Native HTML select element'),
    
    ('navigation-menu', 'Navigation Menu', 'NavigationMenu', '''<NavigationMenu version={version} variant={controls.variant} type={controls.type}>
                  <NavigationMenu.List>
                    <NavigationMenu.Item>
                      <NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
                      <NavigationMenu.Content className="p-4">
                        <div className="text-sm">Product links</div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Item>
                      <NavigationMenu.Link href="/about">About</NavigationMenu.Link>
                    </NavigationMenu.Item>
                  </NavigationMenu.List>
                </NavigationMenu>''', 'Navigation menu with dropdowns'),
    
    ('pagination', 'Pagination', 'Pagination', '''<Pagination
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  currentPage={2}
                  totalPages={5}
                />''', 'Page navigation component'),
    
    ('popover', 'Popover', 'Popover', '''<Popover version={version} variant={controls.variant} type={controls.type}>
                  <Popover.Trigger asChild>
                    <Button version={version} variant={controls.variant}>
                      Info
                    </Button>
                  </Popover.Trigger>
                  <Popover.Content>
                    <div className="text-sm">
                      Popover information content
                    </div>
                  </Popover.Content>
                </Popover>''', 'Click-triggered popover', ['Button']),
    
    ('progress', 'Progress', 'Progress', '''<Progress
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  value={65}
                />''', 'Progress bar indicator'),
    
    ('radio-group', 'Radio Group', 'RadioGroup', '''<RadioGroup
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  defaultValue="option1"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroup.Item value="option1" id={`radio1-${version}`} />
                    <Label htmlFor={`radio1-${version}`}>Option 1</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroup.Item value="option2" id={`radio2-${version}`} />
                    <Label htmlFor={`radio2-${version}`}>Option 2</Label>
                  </div>
                </RadioGroup>''', 'Radio button group', ['Label']),
    
    ('resizable', 'Resizable', 'ResizablePanelGroup', '''<ResizablePanelGroup
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  direction="horizontal"
                  className="min-h-32 rounded border"
                >
                  <ResizablePanel defaultSize={50} className="p-4">
                    <div className="text-sm">Left panel</div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={50} className="p-4">
                    <div className="text-sm">Right panel</div>
                  </ResizablePanel>
                </ResizablePanelGroup>''', 'Resizable panel layout', ['ResizablePanel', 'ResizableHandle']),
    
    ('scroll-area', 'Scroll Area', 'ScrollArea', '''<ScrollArea
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  className="h-32 w-full rounded border"
                >
                  <div className="p-4 space-y-2">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div key={i} className="text-sm">
                        Scrollable item {i + 1}
                      </div>
                    ))}
                  </div>
                </ScrollArea>''', 'Custom scrollable area'),
    
    ('select', 'Select', 'Select', '''<Select version={version} variant={controls.variant} type={controls.type}>
                  <Select.Trigger className="w-48">
                    <Select.Value placeholder="Choose option" />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Item value="alpha">Alpha</Select.Item>
                    <Select.Item value="beta">Beta</Select.Item>
                    <Select.Item value="gamma">Gamma</Select.Item>
                  </Select.Content>
                </Select>''', 'Custom select dropdown'),
    
    ('separator', 'Separator', 'Separator', '''<div className="w-full">
                  <div className="text-sm mb-2">Section 1</div>
                  <Separator version={version} variant={controls.variant} type={controls.type} />
                  <div className="text-sm mt-2">Section 2</div>
                </div>''', 'Visual content separator'),
    
    ('sheet', 'Sheet', 'Sheet', '''<Sheet version={version} variant={controls.variant} type={controls.type}>
                  <Sheet.Trigger asChild>
                    <Button version={version} variant={controls.variant}>
                      Open Sheet
                    </Button>
                  </Sheet.Trigger>
                  <Sheet.Content>
                    <Sheet.Header>
                      <Sheet.Title>Sheet Title</Sheet.Title>
                      <Sheet.Description>
                        Sheet description content
                      </Sheet.Description>
                    </Sheet.Header>
                    <div className="py-4">Sheet body content</div>
                    <Sheet.Footer>
                      <Sheet.Close>Close</Sheet.Close>
                    </Sheet.Footer>
                  </Sheet.Content>
                </Sheet>''', 'Slide-out sheet panel', ['Button']),
    
    ('sidebar', 'Sidebar', 'Sidebar', '''<Sidebar version={version} variant={controls.variant} type={controls.type} className="h-32 w-64 rounded border">
                  <Sidebar.Header>
                    <div className="text-sm font-semibold">Navigation</div>
                  </Sidebar.Header>
                  <Sidebar.Content>
                    <div className="text-xs p-2">Dashboard</div>
                    <div className="text-xs p-2">Settings</div>
                    <div className="text-xs p-2">Profile</div>
                  </Sidebar.Content>
                </Sidebar>''', 'Application sidebar navigation'),
    
    ('skeleton', 'Skeleton', 'Skeleton', '''<div className="space-y-2">
                  <Skeleton version={version} variant={controls.variant} className="h-4 w-full" />
                  <Skeleton version={version} variant={controls.variant} className="h-4 w-3/4" />
                  <Skeleton version={version} variant={controls.variant} className="h-4 w-1/2" />
                </div>''', 'Loading skeleton placeholder'),
    
    ('slider', 'Slider', 'Slider', '''<Slider
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  className="w-full"
                />''', 'Range slider input'),
    
    ('sonner', 'Sonner', 'Sonner', '''<Sonner
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  title="System notification"
                  description="Operation completed successfully"
                />''', 'Toast notification system'),
    
    ('spinner', 'Spinner', 'Spinner', '''<Spinner
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  size="md"
                />''', 'Loading spinner indicator'),
    
    ('switch', 'Switch', 'Switch', '''<div className="flex items-center gap-2">
                  <Switch
                    version={version}
                    variant={controls.variant}
                    type={controls.type}
                    id={`switch-${version}`}
                  />
                  <Label htmlFor={`switch-${version}`}>Enable feature</Label>
                </div>''', 'Toggle switch component', ['Label']),
    
    ('table', 'Table', 'Table', '''<Table version={version} variant={controls.variant} type={controls.type}>
                  <Table.Header>
                    <Table.Row>
                      <Table.Head>Node ID</Table.Head>
                      <Table.Head>Status</Table.Head>
                      <Table.Head>Uptime</Table.Head>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>NODE-001</Table.Cell>
                      <Table.Cell>Online</Table.Cell>
                      <Table.Cell>99.9%</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>NODE-002</Table.Cell>
                      <Table.Cell>Standby</Table.Cell>
                      <Table.Cell>98.5%</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>''', 'Data table component'),
    
    ('tabs', 'Tabs', 'Tabs', '''<Tabs
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  defaultValue="overview"
                  className="w-full"
                >
                  <Tabs.List>
                    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
                    <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
                    <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="overview" className="pt-4">
                    <div className="text-sm">Overview content</div>
                  </Tabs.Content>
                  <Tabs.Content value="analytics" className="pt-4">
                    <div className="text-sm">Analytics content</div>
                  </Tabs.Content>
                  <Tabs.Content value="reports" className="pt-4">
                    <div className="text-sm">Reports content</div>
                  </Tabs.Content>
                </Tabs>''', 'Tabbed content interface'),
    
    ('textarea', 'Textarea', 'Textarea', '''<Textarea
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  placeholder="Enter multi-line text..."
                  rows={4}
                />''', 'Multi-line text input'),
    
    ('toast', 'Toast', 'Toast', '''<ToastProvider>
                  <Toast version={version} variant={controls.variant} type={controls.type}>
                    <ToastTitle>System Alert</ToastTitle>
                    <ToastDescription>
                      Your changes have been saved
                    </ToastDescription>
                    <ToastClose />
                  </Toast>
                  <ToastViewport />
                </ToastProvider>''', 'Toast notification', ['ToastProvider', 'ToastTitle', 'ToastDescription', 'ToastClose', 'ToastViewport']),
    
    ('toggle-group', 'Toggle Group', 'ToggleGroup', '''<ToggleGroup
                  version={version}
                  variant={controls.variant}
                  type="single"
                >
                  <ToggleGroup.Item value="left">
                    <AlignLeft className="h-4 w-4" />
                  </ToggleGroup.Item>
                  <ToggleGroup.Item value="center">
                    <AlignCenter className="h-4 w-4" />
                  </ToggleGroup.Item>
                  <ToggleGroup.Item value="right">
                    <AlignRight className="h-4 w-4" />
                  </ToggleGroup.Item>
                </ToggleGroup>''', 'Toggle button group', [], ['AlignLeft', 'AlignCenter', 'AlignRight']),
    
    ('toggle', 'Toggle', 'Toggle', '''<Toggle
                  version={version}
                  variant={controls.variant}
                  type={controls.type}
                  aria-label="Toggle bold"
                >
                  <Bold className="h-4 w-4" />
                </Toggle>''', 'Single toggle button', [], ['Bold']),
    
    ('tooltip', 'Tooltip', 'Tooltip', '''<TooltipProvider>
                  <Tooltip version={version} variant={controls.variant} type={controls.type}>
                    <TooltipTrigger asChild>
                      <Button version={version} variant={controls.variant}>
                        Hover for info
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-sm">Helpful tooltip information</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>''', 'Hover tooltip component', ['TooltipProvider', 'TooltipTrigger', 'TooltipContent', 'Button']),
    
    ('typography', 'Typography', 'Typography', '''<div className="space-y-2">
                  <Typography.H1 version={version} variant={controls.variant}>Heading 1</Typography.H1>
                  <Typography.H3 version={version} variant={controls.variant}>Heading 3</Typography.H3>
                  <Typography.P version={version} variant={controls.variant}>Paragraph text</Typography.P>
                </div>''', 'Typography components'),
]

TEMPLATE = '''import {{ useState }} from 'react';
import {{ {imports} }} from '@/ui';
import {{ ShowcaseControls }} from '@/components/ShowcaseControls';
import {{ VERSIONS }} from '@/ui/types/common';{lucide_imports}

export function {component_name}Showcase() {{
  const [controls, setControls] = useState({{
    type: 'default' as const,
    variant: 'default' as const,
    extras: {{}},
  }});

  return (
    <div className="w-full">
      <ShowcaseControls value={{controls}} onChange={{setControls}} />
      
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-black tracking-wider">{display_name}</h1>
          <p className="mt-2 text-sm opacity-70">{description}</p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {{VERSIONS.map((version) => (
            <article
              key={{version}}
              className="rounded-lg border border-gray-800 bg-gray-900/40 p-4"
            >
              <h3 className="mb-3 border-b border-gray-800 pb-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
                {{version}}
              </h3>
              <div className="flex min-h-24 w-full items-center justify-center">
                {component_code}
              </div>
            </article>
          ))}}
        </div>
      </div>
    </div>
  );
}}
'''

import os
from pathlib import Path

def generate_showcase_file(slug, display_name, export_name, component_code, description, extra_imports=None, lucide_icons=None):
    """Generate a showcase file for a component"""
    
    # Build imports list
    imports = [export_name]
    if extra_imports:
        imports.extend(extra_imports)
    imports_str = ', '.join(imports)
    
    # Build lucide imports if any
    lucide_imports_str = ''
    if lucide_icons:
        lucide_imports_str = f"\nimport {{ {', '.join(lucide_icons)} }} from 'lucide-react';"
    
    # Determine component name (PascalCase from slug)
    component_name = ''.join(word.capitalize() for word in slug.split('-'))
    
    # Generate file content
    content = TEMPLATE.format(
        imports=imports_str,
        lucide_imports=lucide_imports_str,
        component_name=component_name,
        display_name=display_name,
        description=description,
        component_code=component_code
    )
    
    # Write file
    file_path = Path(f"E:/TONY/ui/src/pages/showcases/{component_name}Showcase.tsx")
    file_path.write_text(content, encoding='utf-8')
    print(f"Created: {component_name}Showcase.tsx")

# Generate all components
for item in COMPONENTS_DATA:
    slug, display_name, export_name, component_code, description = item[:5]
    extra_imports = item[5] if len(item) > 5 else None
    lucide_icons = item[6] if len(item) > 6 else None
    
    generate_showcase_file(slug, display_name, export_name, component_code, description, extra_imports, lucide_icons)

print(f"\nGenerated {len(COMPONENTS_DATA)} showcase files!")
