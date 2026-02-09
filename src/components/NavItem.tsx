'use client';

import React from 'react';

interface NavItemProps {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
}

export default function NavItem({ icon, label, href, active }: NavItemProps) {
  return (
    <a
      href={href}
      className={`flex items-center gap-[10px] px-[14px] py-[11px] rounded-[6px] text-[14px] ${
        active
          ? 'bg-[#3B82F6] text-white'
          : 'text-[#9ca3af] hover:bg-[#1f2937]'
      }`}
    >
      <span className="w-[20px] h-[20px] flex items-center justify-center">{icon}</span>
      {label}
    </a>
  );
}
