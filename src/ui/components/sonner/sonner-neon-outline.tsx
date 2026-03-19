
import * as React from "react"
import { Toaster as SonnerToaster } from "sonner"
import { cn } from "../../utils/component-helpers"

type ToasterProps = React.ComponentProps<typeof SonnerToaster> & {
    version?: string
    variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info'
}

const Component = React.forwardRef<HTMLElement, ToasterProps>(({ 
    version = 'neon-outline', 
    variant = 'primary', 
    className, 
    theme = "dark", 
    ...props 
}, ref) => {
  
  // Custom styles based on version
  const getToastStyles = () => {
     switch('neon-outline') {
         case 'angular-corner':
             return {
                 toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:rounded-none group-[.toaster]:clip-path-polygon-[0_0,100%_0,100%_85%,90%_100%,0_100%]",
                 description: "group-[.toast]:text-muted-foreground",
                 actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                 cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
             }
         case 'neon-outline':
             return {
                 toast: "group toast group-[.toaster]:bg-black group-[.toaster]:text-foreground group-[.toaster]:border group-[.toaster]:border-[hsl(var(--primary-base))] group-[.toaster]:shadow-[0_0_10px_hsl(var(--primary-base)/0.5)]",
                 description: "group-[.toast]:text-muted-foreground",
                 actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                 cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
             }
         default:
             return {
                 toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                 description: "group-[.toast]:text-muted-foreground",
                 actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                 cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
             }
     }
  }

  const styles = getToastStyles();

  return (
    // @ts-ignore
    <SonnerToaster
      theme={theme as "light" | "dark" | "system"}
      className="toaster group"
      toastOptions={{
        classNames: styles,
      }}
      {...props}
    />
  )
})

Component.displayName = "Sonner-neon-outline"

export default Component
