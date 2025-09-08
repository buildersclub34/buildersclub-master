import * as React from 'react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names and merges Tailwind classes
 */
function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

type TypographyVariant =
  | 'display-2xl' | 'display-xl' | 'display-lg' | 'display-md' | 'display-sm' | 'display-xs'
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'body-xl' | 'body-lg' | 'body-md' | 'body-sm' | 'body-xs'
  | 'lead' | 'muted' | 'small'
  | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
  | 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
  | 'text-primary' | 'text-secondary' | 'text-muted' | 'text-accent'
  | 'text-success' | 'text-warning' | 'text-danger' | 'text-info';

const variantClasses: Record<TypographyVariant, string> = {
  // Display styles
  'display-2xl': 'text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight',
  'display-xl': 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight',
  'display-lg': 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight',
  'display-md': 'text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight',
  'display-sm': 'text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight',
  'display-xs': 'text-lg md:text-xl lg:text-2xl font-bold tracking-tight leading-tight',
  
  // Heading styles
  'h1': 'text-3xl md:text-4xl font-bold leading-tight tracking-tight',
  'h2': 'text-2xl md:text-3xl font-bold leading-tight tracking-tight',
  'h3': 'text-xl md:text-2xl font-bold leading-tight',
  'h4': 'text-lg md:text-xl font-bold leading-tight',
  'h5': 'text-base md:text-lg font-bold leading-tight',
  'h6': 'text-sm md:text-base font-bold leading-tight',
  
  // Body text
  'body-xl': 'text-lg md:text-xl leading-relaxed',
  'body-lg': 'text-base md:text-lg leading-relaxed',
  'body-md': 'text-sm md:text-base leading-relaxed',
  'body-sm': 'text-xs md:text-sm leading-relaxed',
  'body-xs': 'text-xs leading-relaxed',
  
  // Special text
  'lead': 'text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300',
  'muted': 'text-sm text-gray-500 dark:text-gray-400',
  'small': 'text-xs text-gray-500 dark:text-gray-400',
  
  // Text weights
  'light': 'font-light',
  'normal': 'font-normal',
  'medium': 'font-medium',
  'semibold': 'font-semibold',
  'bold': 'font-bold',
  'extrabold': 'font-extrabold',
  
  // Text transforms
  'uppercase': 'uppercase tracking-wider',
  'lowercase': 'lowercase',
  'capitalize': 'capitalize',
  'normal-case': 'normal-case',
  
  // Text colors
  'text-primary': 'text-gray-900 dark:text-white',
  'text-secondary': 'text-gray-600 dark:text-gray-300',
  'text-muted': 'text-gray-500 dark:text-gray-400',
  'text-accent': 'text-yellow-500 dark:text-yellow-400',
  'text-success': 'text-green-600 dark:text-green-400',
  'text-warning': 'text-amber-600 dark:text-amber-400',
  'text-danger': 'text-red-600 dark:text-red-400',
  'text-info': 'text-blue-600 dark:text-blue-400',
} as const;

type ElementType = React.ElementType;

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /** The variant of the typography */
  variant?: TypographyVariant;
  /** Additional class names to apply */
  className?: string;
  /** The HTML element to render */
  as?: ElementType;
  /** URL for link elements */
  href?: string;
  /** React children */
  children: React.ReactNode;
}

/**
 * A flexible typography component that can render as any HTML element
 */
export function Typography({
  variant = 'body-md',
  className = '',
  children,
  as: Component = 'p',
  ...props
}: TypographyProps): React.ReactElement {
  const baseClasses = variantClasses[variant] || '';
  const classes = cn(baseClasses, className);
  
  return React.createElement(Component as React.ElementType, { className: classes, ...props }, children);
}

/**
 * A convenient Text component that renders as a paragraph by default
 */
export function Text(props: Omit<TypographyProps, 'as'>): React.ReactElement {
  return <Typography as="p" {...props} />;
}

/**
 * A convenient Heading component that renders as an h2 by default
 */
export function Heading({
  variant = 'h2',
  as = 'h2',
  ...props
}: Omit<TypographyProps, 'variant' | 'as'> & { variant?: TypographyVariant; as?: ElementType }): React.ReactElement {
  return <Typography variant={variant} as={as} {...props} />;
}

export default Typography;
