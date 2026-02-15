import React from 'react';

// Profile card with hardcoded design values
export function ProfileCard({ name, role, avatar }: {
  name: string;
  role: string;
  avatar: string;
}) {
  return (
    <div style={{
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
      border: '1px solid #e2e8f0',
      textAlign: 'center' as const,
      transition: 'transform 300ms ease, box-shadow 300ms ease',
      maxWidth: '320px',
    }}>
      <img
        src={avatar}
        alt={name}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          border: '3px solid #3B82F6',
          marginBottom: '16px',
          objectFit: 'cover' as const,
        }}
      />

      <h3 style={{
        fontSize: '20px',
        fontWeight: 700,
        color: '#1e293b',
        marginBottom: '4px',
        letterSpacing: '-0.01em',
      }}>
        {name}
      </h3>

      <p style={{
        fontSize: '14px',
        color: '#64748b',
        marginBottom: '20px',
      }}>
        {role}
      </p>

      <div style={{
        display: 'flex',
        gap: '8px',
        justifyContent: 'center',
      }}>
        <button style={{
          padding: '8px 20px',
          backgroundColor: '#3B82F6',
          color: '#fff',
          borderRadius: '8px',
          border: 'none',
          fontSize: '13px',
          fontWeight: 600,
          cursor: 'pointer',
          opacity: 1,
          zIndex: 5,
        }}>
          Follow
        </button>

        <button style={{
          padding: '8px 20px',
          backgroundColor: 'transparent',
          color: '#3B82F6',
          borderRadius: '8px',
          border: '2px solid #3B82F6',
          fontSize: '13px',
          fontWeight: 500,
          cursor: 'pointer',
        }}>
          Message
        </button>
      </div>
    </div>
  );
}
