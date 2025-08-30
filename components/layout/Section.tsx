import { cn } from '@/lib/utils';
import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

type SpacingType = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

interface SectionProps extends ComponentPropsWithoutRef<'section'> {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  topSpacing?: SpacingType;
  bottomSpacing?: SpacingType;
  id?: string;
  as?: ElementType;
}

const spacingMap: Record<SpacingType, string> = {
  none: 'py-0',
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-20 md:py-28',
  '2xl': 'py-24 md:py-32',
  '3xl': 'py-28 md:py-40',
  '4xl': 'py-32 md:py-48',
  '5xl': 'py-40 md:py-56',
  '6xl': 'py-48 md:py-64',
  '7xl': 'py-56 md:py-72',
  '8xl': 'py-64 md:py-80',
  '9xl': 'py-72 md:py-96',
};

export function Section({
  children,
  className = '',
  innerClassName = '',
  topSpacing = 'lg',
  bottomSpacing = 'lg',
  id,
  as: Component = 'section',
  ...props
}: SectionProps) {
  const topSpacingClass = spacingMap[topSpacing] || '';
  const bottomSpacingClass = spacingMap[bottomSpacing] || '';

  const ComponentElement = Component as ElementType;

  return (
    <ComponentElement
      className={cn(
        'w-full',
        topSpacingClass,
        bottomSpacingClass,
        className
      )}
      id={id}
      {...props}
    >
      <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', innerClassName)}>
        {children}
      </div>
    </ComponentElement>
  );
}

// Section Title Component
export function SectionTitle({
  children,
  className = '',
  subtitle,
  align = 'left',
  size = 'lg',
}: {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const sizeClasses = {
    sm: 'text-2xl md:text-3xl font-bold',
    md: 'text-3xl md:text-4xl font-bold',
    lg: 'text-4xl md:text-5xl font-bold',
    xl: 'text-5xl md:text-6xl font-bold',
  };

  return (
    <div className={cn('max-w-4xl', alignClasses[align], className)}>
      {subtitle && (
        <p className="text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-2">
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          'text-white font-heading leading-tight tracking-tight',
          sizeClasses[size]
        )}
      >
        {children}
      </h2>
    </div>
  );
}

// Section Description Component
export function SectionDescription({
  children,
  className = '',
  align = 'left',
  maxWidth = '2xl',
}: {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'w-full',
  };

  return (
    <p
      className={cn(
        'text-gray-300 mt-4 text-base md:text-lg',
        maxWidthClasses[maxWidth],
        alignClasses[align],
        className
      )}
    >
      {children}
    </p>
  );
}
