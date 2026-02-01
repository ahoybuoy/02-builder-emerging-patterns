'use client';

import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
}

export default function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  disabled
}: InputProps) {
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && (
        <label style={{
          display: 'block',
          fontSize: '14px',
          fontWeight: '500',
          color: '#374151',
          marginBottom: '8px',
        }}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          width: '100%',
          padding: '12px 16px',
          borderRadius: '8px',
          border: `1px solid ${error ? '#EF4444' : '#d1d5db'}`,
          fontSize: '16px',
          outline: 'none',
        }}
      />
      {error && (
        <p style={{
          fontSize: '14px',
          color: '#EF4444',
          marginTop: '8px'
        }}>
          {error}
        </p>
      )}
    </div>
  );
}
