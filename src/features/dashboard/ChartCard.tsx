'use client';

import React from 'react';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function ChartCard({ title, subtitle, children }: ChartCardProps) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      padding: '24px',
    }}>
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#111827',
        }}>
          {title}
        </h3>
        {subtitle && (
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            marginTop: '4px',
          }}>
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
