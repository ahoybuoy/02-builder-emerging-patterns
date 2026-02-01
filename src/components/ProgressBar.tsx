'use client';

import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  color?: 'primary' | 'success' | 'warning' | 'error';
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  showValue = true,
  color = 'primary'
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  const getColor = () => {
    switch (color) {
      case 'success': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'error': return '#EF4444';
      default: return '#3B82F6';
    }
  };

  return (
    <div>
      {(label || showValue) && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
        }}>
          {label && (
            <span style={{ fontSize: '14px', color: '#374151' }}>{label}</span>
          )}
          {showValue && (
            <span style={{ fontSize: '14px', color: '#6b7280' }}>{value}%</span>
          )}
        </div>
      )}
      <div style={{
        width: '100%',
        height: '8px',
        backgroundColor: '#e5e7eb',
        borderRadius: '9999px',
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${percentage}%`,
          height: '100%',
          backgroundColor: getColor(),
          borderRadius: '9999px',
          transition: 'width 0.3s ease',
        }} />
      </div>
    </div>
  );
}
