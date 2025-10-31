import { FileText, TrendingUp, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';
import StatsCard from '../StatsCard';

export default function HomeTab() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-white text-2xl mb-6">Dashboard</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        <StatsCard title="Total de Ações" value="247" icon={FileText} />
        <StatsCard title="Winrate Geral" value="87%" icon={TrendingUp} />
        <StatsCard title="Ações na Semana" value="18" icon={Calendar} />
        <StatsCard title="Advertências Ativas" value="3" icon={AlertTriangle} />
        <StatsCard title="Ações Concluídas" value="215" icon={CheckCircle} />
      </div>

      {/* Recent Activity */}
      <div 
        className="p-6 rounded-lg"
        style={{
          backgroundColor: '#1A1A1A',
          border: '1px solid #C0C0C0'
        }}
      >
        <h3 className="text-white text-xl mb-4">Atividade Recente</h3>
        <div className="space-y-3">
          {[
            { escalador: 'Duda RMZ', tipo: 'Yellow Jack', resultado: 'Win' },
            { escalador: 'Mosquito Cartier', tipo: 'Mergulhador', resultado: 'Win' },
            { escalador: 'COUTO SS. GIVANILDO', tipo: 'Loja de Armamentos', resultado: 'Win' },
          ].map((acao, idx) => (
            <div 
              key={idx}
              className="p-4 rounded flex items-center justify-between"
              style={{
                backgroundColor: 'rgba(13, 13, 13, 0.5)',
                border: '1px solid rgba(192, 192, 192, 0.3)'
              }}
            >
              <div>
                <p className="text-white">{acao.escalador}</p>
                <p style={{ color: '#BFBFBF' }}>{acao.tipo}</p>
              </div>
              <div 
                className="px-3 py-1 rounded"
                style={{
                  backgroundColor: 'rgba(106, 13, 173, 0.2)',
                  border: '1px solid #6A0DAD',
                  color: '#C0C0C0'
                }}
              >
                {acao.resultado}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
