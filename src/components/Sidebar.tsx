import { LucideIcon } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface SidebarProps {
  menuItems: MenuItem[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
}

export default function Sidebar({ menuItems, activeTab, setActiveTab, isOpen }: SidebarProps) {
  return (
    <aside
      className={`fixed top-20 left-0 h-full transition-transform duration-300 z-30 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}
      style={{ 
        backgroundColor: '#1A1A1A',
        borderRight: '1px solid #C0C0C0',
        width: '256px',
        marginTop: '8px'
      }}
    >
      <nav className="p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="w-full flex items-center gap-3 px-4 py-3 mb-2 rounded transition-all duration-200"
              style={{
                backgroundColor: isActive ? 'rgba(217, 54, 54, 0.1)' : 'transparent',
                border: isActive ? '1px solid #D93636' : '1px solid transparent',
                color: isActive ? '#D93636' : '#C0C0C0',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'rgba(106, 13, 173, 0.1)';
                  e.currentTarget.style.borderColor = '#6A0DAD';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
