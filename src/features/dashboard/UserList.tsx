'use client';

import React from 'react';
import Avatar from '@/components/Avatar';
import Badge from '@/components/Badge';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
}

interface UserListProps {
  users: User[];
  onUserClick?: (user: User) => void;
}

export default function UserList({ users, onUserClick }: UserListProps) {
  const getStatusVariant = (status: User['status']) => {
    switch (status) {
      case 'active': return 'success';
      case 'inactive': return 'error';
      case 'pending': return 'warning';
    }
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
    }}>
      <div style={{
        padding: '16px 24px',
        borderBottom: '1px solid #e5e7eb',
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#111827',
        }}>
          Team Members
        </h3>
      </div>
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => onUserClick?.(user)}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '16px 24px',
            borderBottom: '1px solid #e5e7eb',
            cursor: onUserClick ? 'pointer' : 'default',
          }}
        >
          <Avatar name={user.name} />
          <div style={{ flex: 1, marginLeft: '16px' }}>
            <div style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#111827',
            }}>
              {user.name}
            </div>
            <div style={{
              fontSize: '14px',
              color: '#6b7280',
            }}>
              {user.email}
            </div>
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6b7280',
            marginRight: '16px',
          }}>
            {user.role}
          </div>
          <Badge variant={getStatusVariant(user.status)}>
            {user.status}
          </Badge>
        </div>
      ))}
    </div>
  );
}
