'use client';

import React from 'react';

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export default function Checkbox({ label, checked, onChange, disabled }: CheckboxProps) {
  return (
    <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
    }}>
      <div
        onClick={() => !disabled && onChange(!checked)}
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '4px',
          border: checked ? 'none' : '2px solid #d1d5db',
          backgroundColor: checked ? '#3B82F6' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '12px',
        }}
      >
        {checked && '✓'}
      </div>
      {label && (
        <span style={{
          fontSize: '14px',
          color: '#374151',
        }}>
          {label}
        </span>
      )}
    </label>
  );
}
