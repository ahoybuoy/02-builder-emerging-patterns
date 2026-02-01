'use client';

import React from 'react';
import Checkbox from '@/components/Checkbox';
import Badge from '@/components/Badge';

interface TaskItemProps {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  dueDate?: string;
  onToggle: (id: string) => void;
}

export default function TaskItem({
  id,
  title,
  priority,
  completed,
  dueDate,
  onToggle
}: TaskItemProps) {
  const getPriorityVariant = () => {
    switch (priority) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      default: return 'default';
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '16px',
      borderBottom: '1px solid #e5e7eb',
      backgroundColor: completed ? '#f9fafb' : '#ffffff',
    }}>
      <Checkbox
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <div style={{
        flex: 1,
        marginLeft: '16px',
      }}>
        <span style={{
          fontSize: '14px',
          color: completed ? '#9ca3af' : '#374151',
          textDecoration: completed ? 'line-through' : 'none',
        }}>
          {title}
        </span>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <Badge variant={getPriorityVariant()}>{priority}</Badge>
        {dueDate && (
          <span style={{
            fontSize: '12px',
            color: '#6b7280',
          }}>
            {dueDate}
          </span>
        )}
      </div>
    </div>
  );
}
