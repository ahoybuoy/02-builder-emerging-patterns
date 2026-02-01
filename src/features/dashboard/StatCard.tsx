'use client';

import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: string;
}

export default function StatCard({ title, value, change, changeType = 'neutral', icon }: StatCardProps) {
  const getChangeColor = () => {
    switch (changeType) {
      case 'positive': return '#10B981';
      case 'negative': return '#EF4444';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '24px',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '16px',
      }}>
        <span style={{
          fontSize: '14px',
          color: '#6b7280',
        }}>
          {title}
        </span>
        <span style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#EEF2FF',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {icon}
        </span>
      </div>
      <div style={{
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: '8px',
      }}>
        {value}
      </div>
      {change && (
        <div style={{
          fontSize: '14px',
          color: getChangeColor(),
        }}>
          {changeType === 'positive' ? '↑' : changeType === 'negative' ? '↓' : ''} {change}
        </div>
      )}
    </div>
  );
}
