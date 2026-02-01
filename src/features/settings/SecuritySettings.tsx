'use client';

import React, { useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Alert from '@/components/Alert';

export default function SecuritySettings() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

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
        Security Settings
      </h2>

      {showSuccess && (
        <div style={{ marginBottom: '24px' }}>
          <Alert type="success" title="Success" dismissible onDismiss={() => setShowSuccess(false)}>
            Your password has been updated successfully.
          </Alert>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ maxWidth: '400px' }}>
          <Input
            label="Current Password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <Input
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input
            label="Confirm New Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div style={{
          display: 'flex',
          gap: '16px',
          marginTop: '24px',
        }}>
          <Button>Update Password</Button>
        </div>
      </form>

      <div style={{
        marginTop: '32px',
        paddingTop: '32px',
        borderTop: '1px solid #e5e7eb',
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '16px',
        }}>
          Two-Factor Authentication
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '16px',
        }}>
          Add an extra layer of security to your account.
        </p>
        <Button variant="secondary">Enable 2FA</Button>
      </div>

      <div style={{
        marginTop: '32px',
        paddingTop: '32px',
        borderTop: '1px solid #e5e7eb',
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#EF4444',
          marginBottom: '16px',
        }}>
          Danger Zone
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '16px',
        }}>
          Once you delete your account, there is no going back.
        </p>
        <Button variant="danger">Delete Account</Button>
      </div>
    </div>
  );
}
