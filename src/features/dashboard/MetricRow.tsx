'use client';

import React from 'react';

interface MetricRowProps {
  label: string;
  value: string;
  percentage: number;
}

export default function MetricRow({ label, value, percentage }: MetricRowProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid #e5e7eb',
    }}>
      <span style={{ fontSize: '14px', color: '#374151' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '14px', fontWeight: '600', color: '#3B82F6' }}>{value}</span>
        <div style={{
          width: '80px',
          height: '6px',
          backgroundColor: '#DBEAFE',
          borderRadius: '3px',
        }}>
          <div style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: '#3B82F6',
            borderRadius: '3px',
          }} />
        </div>
      </div>
    </div>
  );
}
