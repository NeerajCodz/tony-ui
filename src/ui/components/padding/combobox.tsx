"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import type { ComboboxBaseProps } from '../_base/combobox';

import { cn } from "@/lib/utils"
import { Button } from "@/ui/components/padding/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/ui/components/padding/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/components/padding/popover"

interface ComboboxProps {
  items: { value: string; label: string }[]
  placeholder?: string
  searchPlaceholder?: string
  emptyText?: string
  value?: string
  onSelect?: (value: string) => void
  className?: string
}

export function Combobox({
  items,
  placeholder = "Select item...",
  searchPlaceholder = "Search...",
  emptyText = "No item found.",
  value,
  onSelect,
  className,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [currentValue, setCurrentValue] = React.useState(value || "")

  React.useEffect(() => {
    if (value) {
      setCurrentValue(value)
    }
  }, [value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[200px] justify-between font-sans", className)}
        >
          {currentValue
            ? items.find((item) => item.value === currentValue)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 font-sans border-transparent">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandEmpty>{emptyText}</CommandEmpty>
          <CommandGroup>
            {items.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  const newValue = currentValue === value ? "" : currentValue
                  setCurrentValue(newValue)
                  onSelect?.(newValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    currentValue === item.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
