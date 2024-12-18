"use client";

import * as React from "react";

import { cn } from "@/utils";

export type IInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ className, placeholder, type, onClick, ...rest }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder || "Search"}
        className={cn(
          "flex h-12 rounded-lg border-[1.5px] border-grey-300 bg-transparent px-3 text-sm text-grey-800 transition-colors duration-500 ease-in-out file:font-medium placeholder:text-grey-400 hover:border-primary-400 focus:border-primary-400 focus:bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:border-grey-300 disabled:opacity-50",
          className
        )}
        ref={ref}
        onClick={onClick}
        {...rest}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
