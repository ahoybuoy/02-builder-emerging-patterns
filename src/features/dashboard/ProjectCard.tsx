'use client';

import React from 'react';
import Badge from '@/components/Badge';
import Avatar from '@/components/Avatar';
import ProgressBar from '@/components/ProgressBar';

interface ProjectCardProps {
  name: string;
  description: string;
  status: 'active' | 'completed' | 'on-hold';
  progress: number;
  members: string[];
  dueDate: string;
}

export default function ProjectCard({
  name,
  description,
  status,
  progress,
  members,
  dueDate
}: ProjectCardProps) {
  const getStatusVariant = () => {
    switch (status) {
      case 'completed': return 'success';
      case 'on-hold': return 'warning';
      default: return 'default';
    }
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      padding: '24px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '16px',
      }}>
        <div>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '4px',
          }}>
            {name}
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
          }}>
            {description}
          </p>
        </div>
        <Badge variant={getStatusVariant()}>{status}</Badge>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <ProgressBar value={progress} label="Progress" />
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', marginLeft: '-8px' }}>
          {members.slice(0, 3).map((member, index) => (
            <div
              key={index}
              style={{
                marginLeft: '-8px',
                border: '2px solid #ffffff',
                borderRadius: '9999px',
              }}
            >
              <Avatar name={member} size="sm" />
            </div>
          ))}
          {members.length > 3 && (
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '9999px',
              backgroundColor: '#f3f4f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              color: '#6b7280',
              marginLeft: '-8px',
              border: '2px solid #ffffff',
            }}>
              +{members.length - 3}
            </div>
          )}
        </div>
        <span style={{
          fontSize: '12px',
          color: '#6b7280',
        }}>
          Due {dueDate}
        </span>
      </div>
    </div>
  );
}
