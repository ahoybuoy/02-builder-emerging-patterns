'use client';

import React from 'react';

interface SidebarItem {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
}

interface SidebarProps {
  items: SidebarItem[];
}

export default function Sidebar({ items }: SidebarProps) {
  return (
    <aside style={{
      width: '256px',
      backgroundColor: '#111827',
      minHeight: '100vh',
      padding: '24px 16px',
    }}>
      <div style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: '32px',
        paddingLeft: '8px',
      }}>
        Dashboard
      </div>
      <nav>
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              borderRadius: '8px',
              marginBottom: '8px',
              textDecoration: 'none',
              backgroundColor: item.active ? '#3B82F6' : 'transparent',
              color: item.active ? '#ffffff' : '#9ca3af',
            }}
          >
            <span>{item.icon}</span>
            <span style={{ fontSize: '14px' }}>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
