'use client';

import React from 'react';

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  time: string;
  read: boolean;
}

interface NotificationPanelProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
}

export default function NotificationPanel({ notifications, onMarkAsRead }: NotificationPanelProps) {
  const getTypeStyles = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return { borderColor: '#10B981', iconBg: '#D1FAE5' };
      case 'warning':
        return { borderColor: '#F59E0B', iconBg: '#FEF3C7' };
      case 'error':
        return { borderColor: '#EF4444', iconBg: '#FEE2E2' };
      default:
        return { borderColor: '#3B82F6', iconBg: '#DBEAFE' };
    }
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      maxHeight: '400px',
      overflow: 'auto',
    }}>
      <div style={{
        padding: '16px 24px',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        backgroundColor: '#ffffff',
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#111827',
        }}>
          Notifications
        </h3>
      </div>
      {notifications.map((notification) => {
        const styles = getTypeStyles(notification.type);
        return (
          <div
            key={notification.id}
            onClick={() => onMarkAsRead(notification.id)}
            style={{
              padding: '16px 24px',
              borderBottom: '1px solid #e5e7eb',
              borderLeft: `3px solid ${styles.borderColor}`,
              backgroundColor: notification.read ? '#ffffff' : '#f9fafb',
              cursor: 'pointer',
            }}
          >
            <p style={{
              fontSize: '14px',
              color: '#374151',
              marginBottom: '4px',
            }}>
              {notification.message}
            </p>
            <p style={{
              fontSize: '12px',
              color: '#6b7280',
            }}>
              {notification.time}
            </p>
          </div>
        );
      })}
    </div>
  );
}
