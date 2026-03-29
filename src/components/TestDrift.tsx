import React, { useState } from 'react';

export function TestDrift() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '32px',
        borderRadius: '12px',
        animation: 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: '#ff6b6b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: '#fff', fontSize: '20px' }}>!</span>
        </div>
        <div>
          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 600, margin: 0 }}>
            Alert Component
          </h2>
          <p style={{ color: '#e0e0e0', fontSize: '14px', marginTop: '4px' }}>
            Hardcoded gradients and inline animations
          </p>
        </div>
      </div>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          marginTop: '20px',
          backgroundColor: isHovered ? '#5a52d5' : '#6c63ff',
          color: '#ffffff',
          border: '2px solid #ffffff33',
          padding: '10px 20px',
          borderRadius: '8px',
          fontSize: '14px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
      >
        Dismiss
      </button>
    </section>
  );
}
