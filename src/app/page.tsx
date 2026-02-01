'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StatCard from '@/features/dashboard/StatCard';
import RecentActivity from '@/features/dashboard/RecentActivity';
import QuickActions from '@/features/dashboard/QuickActions';
import ChartCard from '@/features/dashboard/ChartCard';

export default function DashboardPage() {
  const sidebarItems = [
    { icon: '🏠', label: 'Dashboard', href: '/', active: true },
    { icon: '📊', label: 'Analytics', href: '/analytics' },
    { icon: '👥', label: 'Team', href: '/team' },
    { icon: '📁', label: 'Projects', href: '/projects' },
    { icon: '⚙️', label: 'Settings', href: '/settings' },
  ];

  const stats = [
    { title: 'Total Revenue', value: '$45,231', change: '+12.5%', changeType: 'positive' as const, icon: '💰' },
    { title: 'Active Users', value: '2,345', change: '+8.2%', changeType: 'positive' as const, icon: '👥' },
    { title: 'Conversion Rate', value: '3.45%', change: '-2.1%', changeType: 'negative' as const, icon: '📈' },
    { title: 'Avg. Order Value', value: '$124', change: '+4.3%', changeType: 'positive' as const, icon: '🛒' },
  ];

  const activities = [
    { id: '1', user: 'Sarah Chen', action: 'created a new project', target: 'Marketing Campaign', time: '5 minutes ago' },
    { id: '2', user: 'John Smith', action: 'completed task', target: 'Design Review', time: '15 minutes ago' },
    { id: '3', user: 'Emily Davis', action: 'added a comment on', target: 'Bug Fix #123', time: '1 hour ago' },
  ];

  const quickActions = [
    { icon: '➕', label: 'New Project', onClick: () => {} },
    { icon: '📧', label: 'Send Invite', onClick: () => {} },
    { icon: '📄', label: 'Create Report', onClick: () => {} },
    { icon: '💬', label: 'Start Chat', onClick: () => {} },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar items={sidebarItems} />
      <div style={{ flex: 1 }}>
        <Header userName="John Doe" />
        <main style={{ padding: '24px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '8px',
            }}>
              Welcome back, John
            </h1>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
            }}>
              Here's what's happening with your projects today.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            marginBottom: '24px',
          }}>
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '24px',
          }}>
            <ChartCard title="Revenue Overview" subtitle="Monthly revenue trends">
              <div style={{
                height: '300px',
                backgroundColor: '#f3f4f6',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
              }}>
                Chart placeholder
              </div>
            </ChartCard>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <QuickActions actions={quickActions} />
              <RecentActivity activities={activities} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
