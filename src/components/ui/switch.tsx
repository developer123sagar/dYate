"use client";

import React from "react";

import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/utils";

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  stopPropagation?: boolean;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, stopPropagation, onClick, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "inline-flex h-[18px] w-[30px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-400 data-[state=unchecked]:bg-grey-400",
      className
    )}
    {...props}
    onClick={e => (stopPropagation ? e.stopPropagation() : onClick?.(e))}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-2.5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export default Switch;
