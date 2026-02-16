import React from 'react';

export function StatsWidget({ label, value, change }: { label: string; value: string; change: number }) {
  const isPositive = change >= 0;
  return (
    <div className="bg-white border-[1px] border-[#e5e7eb] rounded-[12px] p-[20px] min-w-[200px]">
      <p className="text-[13px] font-medium text-[#6b7280] uppercase tracking-[0.05em]">{label}</p>
      <p className="text-[32px] font-bold text-[#111827] mt-[8px] leading-[1]">{value}</p>
      <div className="flex items-center gap-[6px] mt-[12px]">
        <span
          className={`text-[13px] font-semibold ${isPositive ? 'text-[#059669]' : 'text-[#dc2626]'}`}
        >
          {isPositive ? '+' : ''}{change}%
        </span>
        <span className="text-[12px] text-[#9ca3af]">vs last month</span>
      </div>
    </div>
  );
}
