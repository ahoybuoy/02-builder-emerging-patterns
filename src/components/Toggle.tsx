'use client';

import React from 'react';

interface ToggleProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export default function Toggle({ label, checked, onChange, disabled }: ToggleProps) {
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
          width: '48px',
          height: '24px',
          borderRadius: '9999px',
          backgroundColor: checked ? '#3B82F6' : '#d1d5db',
          position: 'relative',
          transition: 'background-color 0.2s',
        }}
      >
        <div style={{
          width: '20px',
          height: '20px',
          borderRadius: '9999px',
          backgroundColor: '#ffffff',
          position: 'absolute',
          top: '2px',
          left: checked ? '26px' : '2px',
          transition: 'left 0.2s',
        }} />
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
