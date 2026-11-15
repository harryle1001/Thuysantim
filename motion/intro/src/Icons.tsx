// Biểu tượng nét mảnh, vàng champagne (gradient #f6e7bd → #d8b46c → #a47a36)
import React from 'react';

const paths: Record<string, React.ReactNode> = {
  microbe: (<><ellipse cx="24" cy="24" rx="11" ry="8" transform="rotate(-30 24 24)" /><circle cx="21" cy="25" r="2" /><circle cx="27" cy="21" r="1.4" /><path d="M14 33l-4 4M34 15l4-4M32 31l4 3M16 17l-4-3" /></>),
  drop: (<><path d="M24 7c7 9 12 15 12 21a12 12 0 0 1-24 0c0-6 5-12 12-21z" /><path d="M18 29a6 6 0 0 0 6 6" /></>),
  mineral: (<><path d="M24 6l14 8v20l-14 8-14-8V14z" /><path d="M10 14l14 8 14-8M24 22v20" /></>),
  shield: (<><path d="M24 6l15 5c0 13-4 24-15 31C13 35 9 24 9 11z" /><path d="M17 24l5 5 9-10" /></>),
  leaf: (<><path d="M38 9C20 9 10 18 10 30c0 4 2 8 4 9 14 0 24-10 24-30z" /><path d="M14 39c6-10 12-16 20-22" /></>),
  flask: (<><path d="M19 7h10M21 7v12L11 37a3 3 0 0 0 3 4h20a3 3 0 0 0 3-4L27 19V7" /><path d="M15 30h18" /><circle cx="21" cy="35" r="1.3" /><circle cx="27" cy="33" r="1.1" /></>),
  headset: (<><path d="M11 28v-4a13 13 0 0 1 26 0v4" /><rect x="8" y="27" width="7" height="10" rx="3" /><rect x="33" y="27" width="7" height="10" rx="3" /><path d="M37 37c0 4-4 5-9 5" /></>),
  truck: (<><path d="M5 13h22v18H5zM27 19h8l6 7v5H27z" /><circle cx="13" cy="34" r="3.5" /><circle cx="34" cy="34" r="3.5" /></>),
  badge: (<><path d="M14 6h20v36l-10-6-10 6z" /><path d="M19 20l4 4 7-8" /></>),
  gas: (<><circle cx="17" cy="28" r="7" /><circle cx="30" cy="20" r="6" /><circle cx="32" cy="34" r="4" /><path d="M14 27h6M28 19l4 2" /></>),
  mud: (<><path d="M6 30c5-4 10 4 15 0s10 4 15 0 6 2 6 2" /><path d="M6 38c5-4 10 4 15 0s10 4 15 0 6 2 6 2" /><circle cx="18" cy="16" r="2" /><circle cx="30" cy="12" r="1.5" /></>),
  liver: (<><path d="M8 22c0-8 10-12 20-10s14 6 12 12-8 12-18 12S8 30 8 22z" /><path d="M20 16c2 6 2 12-2 18" /></>),
  pill: (<><rect x="8" y="18" width="32" height="13" rx="6.5" transform="rotate(-35 24 24)" /><path d="M20 15l9 13" /><path d="M36 38l6 6M42 38l-6 6" /></>),
};

export const Icon: React.FC<{ name: string; size: number; tone?: 'gold' | 'warn' }> = ({ name, size, tone = 'gold' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
    stroke={tone === 'gold' ? 'url(#gold)' : '#e9a07a'}>
    <defs><linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f6e7bd" /><stop offset=".5" stopColor="#d8b46c" /><stop offset="1" stopColor="#a47a36" /></linearGradient></defs>
    {paths[name]}
  </svg>
);
