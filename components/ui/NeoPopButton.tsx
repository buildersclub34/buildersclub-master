'use client';

import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import cn from 'classnames';

type ButtonSize = 'sm' | 'default' | 'lg';
type ButtonVariant = 'primary' | 'secondary';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

interface ButtonAsButtonProps
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  as?: 'button';
  href?: never;
}

interface ButtonAsLinkProps
  extends BaseButtonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  as: 'link';
  href: string;
}

type NeoPopButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const NeoPopButton: React.FC<NeoPopButtonProps> = ({
  as = 'button',
  variant = 'primary',
  size = 'default',
  className,
  children,
  fullWidth = false,
  disabled = false,
  isLoading = false,
  loadingText = 'Loading...',
  leftIcon,
  rightIcon,
  ...props
}) => {
  const isDisabled = disabled || isLoading;
  const baseClasses = cn(
    'relative inline-flex items-center justify-center',
    'font-bold text-center uppercase tracking-wider whitespace-nowrap',
    'border-2 rounded transition-all duration-150 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-offset-black/80',
    'disabled:opacity-60 disabled:cursor-not-allowed',
    'will-change-transform min-w-fit',
    'hover:-translate-y-0.5 hover:translate-x-0.5',
    'active:translate-x-0 active:translate-y-0 active:shadow-none',
    'transform -translate-x-1 -translate-y-1',
    'border-b-4 border-r-4', // Enhanced 3D border effect
    {
      // Primary variant - Original yellow colors
      'bg-[#FFD700] hover:bg-[#FFC000] active:bg-[#FFD700] text-gray-900 border-[#D4A017]': 
        variant === 'primary' && !isDisabled,
      'bg-[#FFD700]/70 text-gray-900/70 border-[#D4A017]/70': 
        variant === 'primary' && isDisabled,
      // Secondary variant - Original outline
      'bg-transparent hover:bg-[#FFD700]/10 active:bg-[#FFD700]/20 text-[#FFD700] border-[#D4A017]': 
        variant === 'secondary' && !isDisabled,
      'bg-transparent/20 text-[#FFD700]/60 border-[#D4A017]/60': 
        variant === 'secondary' && isDisabled,
      // Sizes
      'px-4 py-1.5 text-xs': size === 'sm',
      'px-5 py-2 text-sm': size === 'default',
      'px-7 py-3 text-base': size === 'lg',
      // Full width
      'w-full': fullWidth,
      'inline-flex': !fullWidth,
      // Loading state
      'opacity-75': isLoading,
    },
    className
  );

  // Enhanced 3D shadow effect with original colors
  const shadowClasses = cn({
    'shadow-[4px_4px_0_0_rgba(0,0,0,0.9),6px_6px_0_0_rgba(0,0,0,0.5)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.9),4px_4px_0_0_rgba(0,0,0,0.5)] active:shadow-none': 
      variant === 'primary' && !isDisabled,
    'shadow-[4px_4px_0_0_rgba(0,0,0,0.4),6px_6px_0_0_rgba(0,0,0,0.2)]': 
      variant === 'primary' && isDisabled,
    'shadow-[4px_4px_0_0_rgba(212,160,23,0.5),6px_6px_0_0_rgba(212,160,23,0.3)] hover:shadow-[2px_2px_0_0_rgba(212,160,23,0.5),4px_4px_0_0_rgba(212,160,23,0.3)] active:shadow-none': 
      variant === 'secondary' && !isDisabled,
    'shadow-[2px_2px_0_0_rgba(212,160,23,0.3),4px_4px_0_0_rgba(212,160,23,0.1)]': 
      variant === 'secondary' && isDisabled,
  });

  const content = (
    <>
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
          {loadingText && <span className="sr-only">{loadingText}</span>}
        </span>
      )}
      <span className={cn('flex items-center gap-2', { 'invisible': isLoading })}>
        {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </span>
    </>
  );

  const commonProps = {
    className: cn(baseClasses, shadowClasses),
    'aria-busy': isLoading || undefined,
    disabled: isDisabled,
    ...(isDisabled && { 'aria-disabled': true })
  };

  if (as === 'link') {
    const { href, ...linkProps } = props as ButtonAsLinkProps;
    return (
      <Link
        href={isDisabled ? '#' : href}
        {...commonProps}
        {...linkProps}
        onClick={(e) => {
          if (isDisabled) {
            e.preventDefault();
            return;
          }
          linkProps.onClick?.(e);
        }}
      >
        {content}
      </Link>
    );
  }

  const { type = 'button', ...buttonProps } = props as ButtonAsButtonProps;
  return (
    <button
      type={type}
      {...commonProps}
      {...buttonProps}
    >
      {content}
    </button>
  );
};

export default NeoPopButton;
