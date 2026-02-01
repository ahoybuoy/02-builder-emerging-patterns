'use client';

import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onSearch?: () => void;
}

export default function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
  onSearch
}: SearchInputProps) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
    }}>
      <span style={{
        position: 'absolute',
        left: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#6b7280',
      }}>
        🔍
      </span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onKeyDown={(e) => e.key === 'Enter' && onSearch?.()}
        style={{
          width: '100%',
          padding: '12px 16px 12px 48px',
          borderRadius: '8px',
          border: '1px solid #d1d5db',
          fontSize: '14px',
          outline: 'none',
        }}
      />
    </div>
  );
}
