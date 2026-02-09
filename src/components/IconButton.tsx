'use client';

import React from 'react';

interface IconButtonProps {
  icon: string;
  onClick?: () => void;
  variant?: 'default' | 'ghost';
  size?: 'sm' | 'md';
  ariaLabel: string;
  disabled?: boolean;
}

export default function IconButton({
  icon,
  onClick,
  variant = 'default',
  size = 'md',
  ariaLabel,
  disabled
}: IconButtonProps) {
  const dimensions = size === 'sm' ? '32px' : '40px';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      style={{
        width: dimensions,
        height: dimensions,
        borderRadius: '8px',
        border: variant === 'default' ? '1px solid #d1d5db' : 'none',
        backgroundColor: variant === 'default' ? '#ffffff' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        fontSize: size === 'sm' ? '16px' : '20px',
        outline: 'none',
        position: 'relative',
      }}
      onFocus={(e) => {
        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.5)';
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {icon}
    </button>
  );
}
