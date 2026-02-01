'use client';

import React from 'react';

interface IconButtonProps {
  icon: string;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export default function IconButton({
  icon,
  onClick,
  variant = 'default',
  size = 'md',
  disabled
}: IconButtonProps) {
  const getSize = () => {
    switch (size) {
      case 'sm': return { size: 32, fontSize: 16 };
      case 'lg': return { size: 48, fontSize: 24 };
      default: return { size: 40, fontSize: 20 };
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return { backgroundColor: '#3B82F6', color: '#ffffff' };
      case 'danger':
        return { backgroundColor: '#FEE2E2', color: '#EF4444' };
      default:
        return { backgroundColor: '#f3f4f6', color: '#374151' };
    }
  };

  const { size: dimension, fontSize } = getSize();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...getVariantStyles(),
        width: dimension,
        height: dimension,
        borderRadius: '8px',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize,
      }}
    >
      {icon}
    </button>
  );
}
