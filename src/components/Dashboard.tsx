import { useState } from 'react';
import { Home, FileText, AlertTriangle, Trophy, BarChart3, Settings, Users, Menu, X } from 'lucide-react';
import Header from './Header';
import Sidebar from './Sidebar';
import HomeTab from './tabs/HomeTab';
import RegistrarAcaoTab from './tabs/RegistrarAcaoTab';
import AdvertenciasTab from './tabs/AdvertenciasTab';
import RankingTab from './tabs/RankingTab';
import EstatisticasTab from './tabs/EstatisticasTab';
import OficiaisTab from './tabs/OficiaisTab';
import ConfiguracoesTab from './tabs/ConfiguracoesTab';
import torLogo from 'figma:asset/3efa35233879d526af095a82194622f2407abb03.png';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'registrar', label: 'Registrar Ação', icon: FileText },
    { id: 'advertencias', label: 'Advertências', icon: AlertTriangle },
    { id: 'ranking', label: 'Ranking', icon: Trophy },
    { id: 'oficiais', label: 'Oficiais', icon: Users },
    { id: 'estatisticas', label: 'Estatísticas', icon: BarChart3 },
    { id: 'configuracoes', label: 'Configurações', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab />;
      case 'registrar':
        return <RegistrarAcaoTab />;
      case 'advertencias':
        return <AdvertenciasTab />;
      case 'ranking':
        return <RankingTab />;
      case 'oficiais':
        return <OficiaisTab />;
      case 'estatisticas':
        return <EstatisticasTab />;
      case 'configuracoes':
        return <ConfiguracoesTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0D0D0D' }}>
      <Header />
      
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-24 left-4 z-50 p-2"
        style={{ 
          backgroundColor: '#1A1A1A',
          border: '1px solid #C0C0C0',
          borderRadius: '4px'
        }}
      >
        {sidebarOpen ? <X size={24} color="#C0C0C0" /> : <Menu size={24} color="#C0C0C0" />}
      </button>

      <div className="flex">
        <Sidebar 
          menuItems={menuItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isOpen={sidebarOpen}
        />
        
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'ml-0'}`}>
          {/* Background Logo */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 0 }}>
            <img 
              src={torLogo} 
              alt="T.O.R Background" 
              className="w-[600px] h-[600px]"
              style={{ opacity: 0.05 }}
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
