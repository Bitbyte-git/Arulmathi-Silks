import React from 'react';
import { useVisitorCounter } from '../hooks/useVisitorCounter';

export default function VisitorCounter({ className = '' }) {
  const { formattedCount, isLoading } = useVisitorCounter();

  return (
    <div
      className={`group relative inline-flex items-center gap-2.5 rounded-full border border-[#c9933a]/30 bg-gradient-to-r from-[#2d1811]/90 via-[#3a2017]/95 to-[#2d1811]/90 px-3.5 py-1.5 shadow-md shadow-[#2d1811]/20 backdrop-blur-sm transition-all duration-300 hover:border-[#c9933a]/70 hover:shadow-lg hover:shadow-[#c9933a]/15 ${className}`}
      title="Live Site Visitors (AWS DynamoDB)"
    >
      {/* Live Glowing Pulse Indicator */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c9933a] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e5b35c]" />
      </span>

      {/* Visitor Eye Icon */}
      <i className="fas fa-eye text-[11px] text-[#c9933a] transition-transform duration-300 group-hover:scale-110" />

      {/* Count Text */}
      <div className="flex items-center gap-1.5 text-[12px] font-sans tracking-[0.8px]">
        <span className="font-medium text-[#f5f0e8]/80">Site Visits:</span>
        <span className="font-bold text-[#e5b35c] transition-all duration-300">
          {isLoading ? (
            <span className="inline-block h-3 w-8 animate-pulse rounded bg-[#c9933a]/30" />
          ) : (
            formattedCount
          )}
        </span>
      </div>
    </div>
  );
}
