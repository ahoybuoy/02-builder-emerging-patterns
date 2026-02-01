'use client';

import React from 'react';

interface AvatarProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Avatar({ name, src, size = 'md' }: AvatarProps) {
  const getSize = () => {
    switch (size) {
      case 'sm': return 32;
      case 'md': return 40;
      case 'lg': return 56;
    }
  };

  const dimension = getSize();

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        style={{
          width: dimension,
          height: dimension,
          borderRadius: '9999px',
          objectFit: 'cover',
        }}
      />
    );
  }

  return (
    <div style={{
      width: dimension,
      height: dimension,
      borderRadius: '9999px',
      backgroundColor: '#3B82F6',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size === 'lg' ? '20px' : '14px',
      fontWeight: '600',
    }}>
      {name.charAt(0).toUpperCase()}
    </div>
  );
}
