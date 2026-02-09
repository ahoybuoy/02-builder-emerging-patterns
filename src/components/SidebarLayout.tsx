'use client';

import React from 'react';

interface SidebarLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function SidebarLayout({ sidebar, children }: SidebarLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-[280px] bg-[#111827] p-[18px] flex flex-col gap-[22px]">
        {sidebar}
      </aside>
      <main className="flex-1 p-[37px] bg-[#f9fafb]">
        <div className="max-w-[1140px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
