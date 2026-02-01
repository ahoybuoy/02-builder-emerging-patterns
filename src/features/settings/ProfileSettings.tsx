'use client';

import React, { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';

export default function ProfileSettings() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      padding: '32px',
    }}>
      <h2 style={{
        fontSize: '18px',
        fontWeight: '600',
        color: '#111827',
        marginBottom: '24px',
      }}>
        Profile Settings
      </h2>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        marginBottom: '32px',
        paddingBottom: '32px',
        borderBottom: '1px solid #e5e7eb',
      }}>
        <Avatar name={name} size="lg" />
        <div>
          <Button variant="secondary" size="sm">Change Photo</Button>
          <p style={{
            fontSize: '12px',
            color: '#6b7280',
            marginTop: '8px',
          }}>
            JPG, GIF or PNG. Max size 2MB.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '400px' }}>
        <Input
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{
        display: 'flex',
        gap: '16px',
        marginTop: '24px',
      }}>
        <Button>Save Changes</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </div>
  );
}
