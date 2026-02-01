'use client';

import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  disabled?: boolean;
}

export default function Radio({ options, value, onChange, name, disabled }: RadioProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {options.map((option) => (
        <label
          key={option.value}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
          }}
        >
          <div
            onClick={() => !disabled && onChange(option.value)}
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '9999px',
              border: `2px solid ${value === option.value ? '#3B82F6' : '#d1d5db'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {value === option.value && (
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '9999px',
                backgroundColor: '#3B82F6',
              }} />
            )}
          </div>
          <span style={{
            fontSize: '14px',
            color: '#374151',
          }}>
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}
