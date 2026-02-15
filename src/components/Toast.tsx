'use client';

import React from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  onClose?: () => void;
}

export default function Toast({ message, type = 'info', onClose }: ToastProps) {
  const colors = {
    success: { bg: '#dcfce7', border: '#22c55e', text: '#166534' },
    error: { bg: '#fee2e2', border: '#ef4444', text: '#991b1b' },
    warning: { bg: '#fff7cd', border: '#f59e0b', text: '#92400e' },
    info: { bg: '#dbeafe', border: '#3b82f6', text: '#1e40af' },
  };

  const c = colors[type];

  return (
    <div
      style={{
        backgroundColor: c.bg,
        border: `1px solid ${c.border}`,
        borderRadius: '8px',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '400px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      <span style={{ color: c.text, fontSize: '14px', fontWeight: 500 }}>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: c.text,
            cursor: 'pointer',
            fontSize: '18px',
            padding: '0 0 0 12px',
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}
