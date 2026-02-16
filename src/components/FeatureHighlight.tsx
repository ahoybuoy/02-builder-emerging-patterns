import React from 'react';

export function FeatureHighlight({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group relative p-6 bg-white rounded-2xl border border-gray-200 hover:border-indigo-300 transition-colors duration-200">
      <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      <div className="absolute top-[12px] right-[12px]">
        <span className="inline-flex items-center px-[6px] py-[2px] rounded-[4px] text-[10px] font-medium bg-[#dbeafe] text-[#1e40af]">
          New
        </span>
      </div>
    </div>
  );
}
