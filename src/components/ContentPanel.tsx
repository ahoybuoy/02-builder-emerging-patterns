'use client';

import React from 'react';

interface ContentPanelProps {
  title: string;
  children: React.ReactNode;
}

export default function ContentPanel({ title, children }: ContentPanelProps) {
  return (
    <section className="bg-white rounded-[10px] border border-[#e5e7eb] p-[28px] mb-[22px]">
      <h2 className="text-[22px] font-semibold text-[#111827] mb-[18px]">
        {title}
      </h2>
      <div className="space-y-[14px]">
        {children}
      </div>
    </section>
  );
}
