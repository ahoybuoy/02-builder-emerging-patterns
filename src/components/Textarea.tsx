'use client';

import React from 'react';

interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  rows?: number;
  disabled?: boolean;
}

export default function Textarea({
  label,
  placeholder,
  value,
  onChange,
  error,
  rows = 4,
  disabled
}: TextareaProps) {
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
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        style={{
          width: '100%',
          padding: '12px 16px',
          borderRadius: '8px',
          border: `1px solid ${error ? '#EF4444' : '#d1d5db'}`,
          fontSize: '16px',
          outline: 'none',
          resize: 'vertical',
          fontFamily: 'inherit',
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
