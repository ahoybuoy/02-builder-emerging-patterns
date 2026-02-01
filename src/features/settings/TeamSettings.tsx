'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Avatar from '@/components/Avatar';
import Badge from '@/components/Badge';
import Modal from '@/components/Modal';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'viewer';
}

export default function TeamSettings() {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');

  const members: TeamMember[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: '2', name: 'Sarah Chen', email: 'sarah@example.com', role: 'member' },
    { id: '3', name: 'Mike Johnson', email: 'mike@example.com', role: 'viewer' },
  ];

  const getRoleColor = (role: TeamMember['role']) => {
    switch (role) {
      case 'admin': return 'error';
      case 'member': return 'default';
      default: return 'warning';
    }
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      padding: '32px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
      }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#111827',
        }}>
          Team Members
        </h2>
        <Button onClick={() => setShowInviteModal(true)}>Invite Member</Button>
      </div>

      <div style={{
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        overflow: 'hidden',
      }}>
        {members.map((member, index) => (
          <div
            key={member.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px 24px',
              borderBottom: index < members.length - 1 ? '1px solid #e5e7eb' : 'none',
            }}
          >
            <Avatar name={member.name} />
            <div style={{ flex: 1, marginLeft: '16px' }}>
              <div style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#111827',
              }}>
                {member.name}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
              }}>
                {member.email}
              </div>
            </div>
            <Badge variant={getRoleColor(member.role)}>{member.role}</Badge>
            <button style={{
              marginLeft: '16px',
              padding: '8px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              color: '#6b7280',
            }}>
              ⋮
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        title="Invite Team Member"
      >
        <Input
          label="Email Address"
          type="email"
          placeholder="colleague@example.com"
          value={inviteEmail}
          onChange={(e) => setInviteEmail(e.target.value)}
        />
        <div style={{
          display: 'flex',
          gap: '16px',
          marginTop: '24px',
        }}>
          <Button fullWidth>Send Invite</Button>
          <Button variant="secondary" fullWidth onClick={() => setShowInviteModal(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}
