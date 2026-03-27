
import { cn } from "@/lib/utils";
import { PanelLeft } from "lucide-react";
import * as React from "react";
import { ghostEffectsClass, type GhostEffects } from "./_effects";
import { Button } from "./button";
import { Sheet, SheetContent } from "./sheet";

const SidebarContext = React.createContext<{
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  toggleSidebar: () => void
}>({
  state: "expanded",
  open: true,
  setOpen: () => {},
  openMobile: false,
  setOpenMobile: () => {},
  toggleSidebar: () => {},
})

function SidebarProvider({
  children,
  defaultOpen = true,
  className,
  style,
  effects = "on",
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean
  effects?: GhostEffects
}) {
  const [open, setOpen] = React.useState(defaultOpen)
  const [openMobile, setOpenMobile] = React.useState(false)

  const toggleSidebar = React.useCallback(() => {
    return openMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [openMobile, setOpen, setOpenMobile])

  const state = open ? "expanded" : "collapsed"

  return (
    <SidebarContext.Provider
      value={{
        state,
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }}
    >
        <div
          style={
            {
              "--sidebar-width": "16rem",
              "--sidebar-width-icon": "3rem",
              ...style,
            } as React.CSSProperties
          }
          className={cn(ghostEffectsClass(effects),
            "group/sidebar-wrapper flex min-h-screen w-full has-[[data-variant=inset]]:bg-[var(--gh-surface)]",
            className
          )}
          {...props}
        >
          {children}
        </div>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}) {
  const { openMobile, setOpenMobile } = React.useContext(SidebarContext)

  if (collapsible === "none") {
    return (
      <div
        className={cn(
          "flex h-full w-[--sidebar-width] flex-col bg-[var(--gh-surface)] text-[var(--gh-text)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  return (
    <>
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="w-[--sidebar-width] bg-[var(--gh-surface)] p-0 text-[var(--gh-text)] [&>button]:hidden"
          style={
            {
              "--sidebar-width": "18rem",
            } as React.CSSProperties
          }
          side={side}
        >
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
      <div
        className={cn(
          "hidden border-r border-[var(--gh-border)] bg-[var(--gh-surface)] text-[var(--gh-text)] md:flex",
          "h-screen w-[--sidebar-width] flex-col fixed z-10",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = React.useContext(SidebarContext)

  return (
    <Button
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

export { Sidebar,SidebarProvider,SidebarTrigger };
