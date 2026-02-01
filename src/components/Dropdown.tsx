'use client';

import React, { useState } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  label?: string;
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export default function Dropdown({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option'
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div style={{ marginBottom: '16px', position: 'relative' }}>
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
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #d1d5db',
          backgroundColor: '#ffffff',
          fontSize: '16px',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: selectedOption ? '#374151' : '#9ca3af',
        }}
      >
        {selectedOption?.label || placeholder}
        <span>▼</span>
      </button>
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          border: '1px solid #d1d5db',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          marginTop: '4px',
          zIndex: 10,
        }}>
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange?.(option.value);
                setIsOpen(false);
              }}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: 'none',
                backgroundColor: option.value === value ? '#EEF2FF' : 'transparent',
                color: option.value === value ? '#3B82F6' : '#374151',
                fontSize: '14px',
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
