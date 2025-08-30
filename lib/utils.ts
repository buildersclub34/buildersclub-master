import React from 'react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Type for HTML element tag names
type HtmlTag = keyof JSX.IntrinsicElements;

// Type for React component props
type ComponentProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
};

// Utility type for polymorphic components
type PolymorphicComponentProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;
