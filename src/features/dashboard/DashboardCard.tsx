'use client';

import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string;
  trend: 'up' | 'down' | 'flat';
  accentColor?: string;
}

export default function DashboardCard({ title, value, trend, accentColor }: DashboardCardProps) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      padding: '24px',
      borderTop: `3px solid ${accentColor || '#3B82F6'}`,
    }}>
      <div style={{
        fontSize: '14px',
        color: '#6b7280',
        marginBottom: '8px',
      }}>
        {title}
      </div>
      <div style={{
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#3B82F6',
        marginBottom: '12px',
      }}>
        {value}
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '13px',
        color: trend === 'up' ? '#10B981' : trend === 'down' ? '#EF4444' : '#6b7280',
      }}>
        <span>{trend === 'up' ? '▲' : trend === 'down' ? '▼' : '—'}</span>
        <span>vs last period</span>
      </div>
      <div style={{
        marginTop: '16px',
        height: '4px',
        backgroundColor: '#E5E7EB',
        borderRadius: '2px',
      }}>
        <div style={{
          height: '100%',
          width: '72%',
          backgroundColor: '#3B82F6',
          borderRadius: '2px',
        }} />
      </div>
    </div>
  );
}
