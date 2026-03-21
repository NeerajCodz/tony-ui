import re

# List of disabled page component names (UI-prefixed)
disabled = ['UIAlertPage', 'UICardPage', 'UIEmptyStatePage', 'UIHoverCardPage', 'UIItemPage', 'UIKbdPage', 
  'UIMenubarPage', 'UINativeSelectPage', 'UINavigationMenuPage', 'UIPaginationPage', 'UIRadioGroupPage',
  'UIScrollAreaPage', 'UISidebarPage', 'UISliderPage', 'UISpinnerPage', 'UISwitchPage', 'UITablePage',
  'UITabsPage', 'UITextareaPage', 'UIToastPage', 'UIToggleGroupPage', 'UITogglePage', 'UITooltipPage', 'UITypographyPage']

with open('src/router.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

for comp in disabled:
    # Comment out routes that use this component
    content = re.sub(
        rf'(\s*<Route[^>]+element=\{{<{comp}[^}}]*\}}[^>]*/>\s*)',
        r'              {/* \1 */} {/* TODO: Create missing exports */}\n',
        content
    )

with open('src/router.tsx', 'w', encoding='utf-8', newline='') as f:
    f.write(content)

print('✅ Commented out routes for disabled pages')
