'use client';

import React from 'react';
import Avatar from '@/components/Avatar';

interface Activity {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

export default function RecentActivity({ activities }: RecentActivityProps) {
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
        marginBottom: '24px',
      }}>
        Recent Activity
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {activities.map((activity) => (
          <div
            key={activity.id}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              paddingBottom: '16px',
              borderBottom: '1px solid #e5e7eb',
            }}
          >
            <Avatar name={activity.user} size="sm" />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '14px', color: '#374151' }}>
                <span style={{ fontWeight: '500' }}>{activity.user}</span>{' '}
                {activity.action}{' '}
                <span style={{ color: '#3B82F6' }}>{activity.target}</span>
              </p>
              <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
