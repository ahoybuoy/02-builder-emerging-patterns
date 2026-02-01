'use client';

import React from 'react';

interface SkeletonProps {
  width?: string;
  height?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export default function Skeleton({
  width = '100%',
  height = '16px',
  variant = 'text'
}: SkeletonProps) {
  const getBorderRadius = () => {
    switch (variant) {
      case 'circular': return '9999px';
      case 'rectangular': return '8px';
      default: return '4px';
    }
  };

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: '#e5e7eb',
        borderRadius: getBorderRadius(),
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }}
    />
  );
}
