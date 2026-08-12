import React, { useState, useEffect, useRef } from 'react';

// Reusable SVG Icon Wrapper Component
function Ic({ size = 24, color = "currentColor", strokeWidth = 2, className = "", style = {}, fill = "none", children }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      {children}
    </svg>
  );
}

// Icon Definitions
export const Droplets = (p) => <Ic {...p}><path d="M12 2.5c3.6 5.2 6.5 9 6.5 12.3a6.5 6.5 0 0 1-13 0c0-3.3 2.9-7.1 6.5-12.3z" /></Ic>;
export const ShieldCheck = (p) => <Ic {...p}><path d="M12 3l7 3.2v5.3c0 5-3 8.6-7 9.5-4-.9-7-4.5-7-9.5V6.2L12 3z" /><path d="M9 12l2 2 4-4.5" /></Ic>;
export const ClipboardList = (p) => <Ic {...p}><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></Ic>;

export default function App() {
  return (
    <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div class="flex items-center space-x-2">
        <Droplets className="text-blue-500" />
        <h1 class="text-xl font-medium text-black">Geri-Check Dashboard</h1>
      </div>
      <p class="text-gray-500">Track daily hydration, log basic symptoms, and stay safe.</p>
    </div>
  );
}
