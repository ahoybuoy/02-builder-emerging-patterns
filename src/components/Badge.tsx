'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const getStyles = () => {
    switch (variant) {
      case 'success':
        return { backgroundColor: '#D1FAE5', color: '#10B981' };
      case 'warning':
        return { backgroundColor: '#FEF3C7', color: '#F59E0B' };
      case 'error':
        return { backgroundColor: '#FEE2E2', color: '#EF4444' };
      default:
        return { backgroundColor: '#DBEAFE', color: '#3B82F6' };
    }
  };

  return (
    <span style={{
      ...getStyles(),
      padding: '4px 12px',
      borderRadius: '9999px',
      fontSize: '12px',
      fontWeight: '500',
    }}>
      {children}
    </span>
  );
}
