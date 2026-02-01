'use client';

import React from 'react';
import Button from '@/components/Button';
import Badge from '@/components/Badge';

export default function BillingSettings() {
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
        Billing & Subscription
      </h2>

      <div style={{
        padding: '24px',
        borderRadius: '8px',
        backgroundColor: '#f9fafb',
        marginBottom: '24px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}>
          <div>
            <div style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#111827',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              Pro Plan <Badge variant="success">Active</Badge>
            </div>
            <div style={{
              fontSize: '14px',
              color: '#6b7280',
              marginTop: '4px',
            }}>
              $29/month - Renews on March 1, 2024
            </div>
          </div>
          <Button variant="secondary">Change Plan</Button>
        </div>
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '16px',
        }}>
          Payment Method
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '32px',
              backgroundColor: '#3B82F6',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '12px',
              fontWeight: 'bold',
            }}>
              VISA
            </div>
            <div>
              <div style={{ fontSize: '14px', color: '#374151' }}>
                •••• •••• •••• 4242
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>
                Expires 12/25
              </div>
            </div>
          </div>
          <Button variant="secondary" size="sm">Update</Button>
        </div>
      </div>

      <div>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '16px',
        }}>
          Billing History
        </h3>
        <div style={{
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          overflow: 'hidden',
        }}>
          {[
            { date: 'Feb 1, 2024', amount: '$29.00', status: 'Paid' },
            { date: 'Jan 1, 2024', amount: '$29.00', status: 'Paid' },
            { date: 'Dec 1, 2023', amount: '$29.00', status: 'Paid' },
          ].map((invoice, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 24px',
                borderBottom: index < 2 ? '1px solid #e5e7eb' : 'none',
              }}
            >
              <span style={{ fontSize: '14px', color: '#374151' }}>{invoice.date}</span>
              <span style={{ fontSize: '14px', color: '#374151' }}>{invoice.amount}</span>
              <Badge variant="success">{invoice.status}</Badge>
              <a
                href="#"
                style={{
                  fontSize: '14px',
                  color: '#3B82F6',
                  textDecoration: 'none',
                }}
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
