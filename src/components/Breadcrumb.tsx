'use client';

import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    }}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span style={{ color: '#9ca3af' }}>/</span>
          )}
          {item.href ? (
            <a
              href={item.href}
              style={{
                fontSize: '14px',
                color: '#3B82F6',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </a>
          ) : (
            <span style={{
              fontSize: '14px',
              color: '#374151',
            }}>
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
