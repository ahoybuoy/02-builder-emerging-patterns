'use client';

import React from 'react';

interface DividerProps {
  label?: string;
}

export default function Divider({ label }: DividerProps) {
  if (label) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        margin: '24px 0',
      }}>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#e5e7eb' }} />
        <span style={{ fontSize: '12px', color: '#6b7280' }}>{label}</span>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#e5e7eb' }} />
      </div>
    );
  }

  return (
    <div style={{
      height: '1px',
      backgroundColor: '#e5e7eb',
      margin: '24px 0',
    }} />
  );
}
