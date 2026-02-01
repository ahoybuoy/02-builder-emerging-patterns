'use client';

import React from 'react';
import Avatar from './Avatar';

interface HeaderProps {
  userName: string;
}

export default function Header({ userName }: HeaderProps) {
  return (
    <header style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
        <input
          type="search"
          placeholder="Search..."
          style={{
            padding: '8px 16px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            width: '300px',
            fontSize: '14px',
          }}
        />
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
        <button style={{
          padding: '8px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer',
        }}>
          🔔
        </button>
        <Avatar name={userName} />
      </div>
    </header>
  );
}
