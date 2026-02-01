'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: boolean;
}

export default function Card({ children, padding = 'md', shadow = true }: CardProps) {
  const getPadding = () => {
    switch (padding) {
      case 'sm': return '16px';
      case 'md': return '24px';
      case 'lg': return '32px';
    }
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      padding: getPadding(),
      boxShadow: shadow ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
    }}>
      {children}
    </div>
  );
}
