import React from 'react';
import { useStickyState } from '../hooks/useStickyState';

export default function DashboardPage() {
  const [turbins] = useStickyState([], 'turbins');
  // Mock: consider any turbin with images > 0 as "nặng lỗi"
  const heavy = turbins.filter(t => t.images > 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard - Turbin có lỗi nặng</h2>
      <ul>
        {heavy.map(t => (
          <li key={t.id}>{t.turbine} ({t.images} ảnh)</li>
        ))}
      </ul>
    </div>
  );
}