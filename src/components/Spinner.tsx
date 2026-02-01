'use client';

import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export default function Spinner({ size = 'md', color = '#3B82F6' }: SpinnerProps) {
  const getSize = () => {
    switch (size) {
      case 'sm': return 16;
      case 'lg': return 32;
      default: return 24;
    }
  };

  const dimension = getSize();

  return (
    <div
      style={{
        width: dimension,
        height: dimension,
        border: `2px solid #e5e7eb`,
        borderTopColor: color,
        borderRadius: '9999px',
        animation: 'spin 0.6s linear infinite',
      }}
    />
  );
}
