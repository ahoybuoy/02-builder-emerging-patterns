'use client';

import React from 'react';

interface AlertProps {
  type: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export default function Alert({ type, title, children, dismissible, onDismiss }: AlertProps) {
  const getStyles = () => {
    switch (type) {
      case 'success':
        return { backgroundColor: '#D1FAE5', borderColor: '#10B981', color: '#065F46' };
      case 'warning':
        return { backgroundColor: '#FEF3C7', borderColor: '#F59E0B', color: '#92400E' };
      case 'error':
        return { backgroundColor: '#FEE2E2', borderColor: '#EF4444', color: '#991B1B' };
      default:
        return { backgroundColor: '#DBEAFE', borderColor: '#3B82F6', color: '#1E40AF' };
    }
  };

  const styles = getStyles();

  return (
    <div style={{
      padding: '16px 24px',
      borderRadius: '8px',
      borderLeft: `4px solid ${styles.borderColor}`,
      backgroundColor: styles.backgroundColor,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    }}>
      <div>
        {title && (
          <div style={{
            fontWeight: '600',
            fontSize: '14px',
            color: styles.color,
            marginBottom: '4px',
          }}>
            {title}
          </div>
        )}
        <div style={{
          fontSize: '14px',
          color: styles.color,
        }}>
          {children}
        </div>
      </div>
      {dismissible && (
        <button
          onClick={onDismiss}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: styles.color,
            fontSize: '18px',
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}
