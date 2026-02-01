'use client';

import React from 'react';

interface QuickAction {
  icon: string;
  label: string;
  onClick: () => void;
}

interface QuickActionsProps {
  actions: QuickAction[];
}

export default function QuickActions({ actions }: QuickActionsProps) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      padding: '24px',
    }}>
      <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        color: '#111827',
        marginBottom: '16px',
      }}>
        Quick Actions
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              backgroundColor: '#ffffff',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            <span style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#DBEAFE',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
            }}>
              {action.icon}
            </span>
            <span style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
            }}>
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
