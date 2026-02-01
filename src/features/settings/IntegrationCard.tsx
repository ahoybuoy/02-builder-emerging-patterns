'use client';

import React from 'react';
import Button from '@/components/Button';
import Badge from '@/components/Badge';

interface IntegrationCardProps {
  name: string;
  description: string;
  icon: string;
  connected: boolean;
  onConnect?: () => void;
  onDisconnect?: () => void;
}

export default function IntegrationCard({
  name,
  description,
  icon,
  connected,
  onConnect,
  onDisconnect
}: IntegrationCardProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '24px',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      backgroundColor: '#ffffff',
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        backgroundColor: '#f3f4f6',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
      }}>
        {icon}
      </div>
      <div style={{ flex: 1, marginLeft: '16px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '4px',
        }}>
          <span style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#111827',
          }}>
            {name}
          </span>
          {connected && <Badge variant="success">Connected</Badge>}
        </div>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
        }}>
          {description}
        </p>
      </div>
      {connected ? (
        <Button variant="secondary" onClick={onDisconnect}>Disconnect</Button>
      ) : (
        <Button onClick={onConnect}>Connect</Button>
      )}
    </div>
  );
}
