'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled,
  fullWidth
}: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return { backgroundColor: '#3B82F6', color: 'white' };
      case 'secondary':
        return { backgroundColor: '#f3f4f6', color: '#374151', border: '1px solid #d1d5db' };
      case 'danger':
        return { backgroundColor: '#EF4444', color: 'white' };
      case 'success':
        return { backgroundColor: '#10B981', color: 'white' };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { padding: '8px 16px', fontSize: '14px' };
      case 'md':
        return { padding: '12px 24px', fontSize: '16px' };
      case 'lg':
        return { padding: '16px 32px', fontSize: '18px' };
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...getVariantStyles(),
        ...getSizeStyles(),
        borderRadius: '8px',
        fontWeight: '500',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        width: fullWidth ? '100%' : 'auto',
        border: variant === 'secondary' ? '1px solid #d1d5db' : 'none',
      }}
    >
      {children}
    </button>
  );
}
