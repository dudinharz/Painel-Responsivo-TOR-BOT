import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

export default function StatsCard({ title, value, icon: Icon }: StatsCardProps) {
  return (
    <div 
      className="p-6 rounded-lg backdrop-blur-sm"
      style={{
        backgroundColor: 'rgba(26, 26, 26, 0.8)',
        border: '1px solid #C0C0C0',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-2" style={{ color: '#BFBFBF' }}>{title}</p>
          <p className="text-white text-3xl">{value}</p>
        </div>
        <div 
          className="p-4 rounded-full"
          style={{ backgroundColor: 'rgba(192, 192, 192, 0.1)' }}
        >
          <Icon size={32} color="#C0C0C0" />
        </div>
      </div>
    </div>
  );
}
