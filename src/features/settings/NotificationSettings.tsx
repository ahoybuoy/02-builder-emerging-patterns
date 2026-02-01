'use client';

import React, { useState } from 'react';
import Toggle from '@/components/Toggle';
import Button from '@/components/Button';

export default function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

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
        Notification Settings
      </h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '16px',
          borderBottom: '1px solid #e5e7eb',
        }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
              Email Notifications
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>
              Receive notifications via email
            </div>
          </div>
          <Toggle checked={emailNotifications} onChange={setEmailNotifications} />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '16px',
          borderBottom: '1px solid #e5e7eb',
        }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
              Push Notifications
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>
              Receive push notifications on your device
            </div>
          </div>
          <Toggle checked={pushNotifications} onChange={setPushNotifications} />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '16px',
          borderBottom: '1px solid #e5e7eb',
        }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
              Weekly Digest
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>
              Get a weekly summary of activity
            </div>
          </div>
          <Toggle checked={weeklyDigest} onChange={setWeeklyDigest} />
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#374151' }}>
              Marketing Emails
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>
              Receive product updates and offers
            </div>
          </div>
          <Toggle checked={marketingEmails} onChange={setMarketingEmails} />
        </div>
      </div>

      <div style={{ marginTop: '32px' }}>
        <Button>Save Preferences</Button>
      </div>
    </div>
  );
}
