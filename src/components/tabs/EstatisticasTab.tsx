import { Target } from 'lucide-react';

interface Acao {
  id: number;
  escalador: string;
  passaporte: string;
  escalados: number;
  tipoAcao: string;
  resultado: string;
}

export default function EstatisticasTab() {
  const historicoAcoes: Acao[] = [
    { id: 1, escalador: 'Duda RMZ', passaporte: '7564', escalados: 3, tipoAcao: 'Yellow Jack', resultado: 'Win' },
    { id: 2, escalador: 'Mosquito Cartier', passaporte: '3002', escalados: 5, tipoAcao: 'Mergulhador', resultado: 'Win' },
    { id: 3, escalador: 'COUTO SS. GIVANILDO', passaporte: '6983', escalados: 4, tipoAcao: 'Loja de Armamentos', resultado: 'Win' },
    { id: 4, escalador: 'Tura Kalashnikov', passaporte: '10159', escalados: 2, tipoAcao: 'Bebidas Samir', resultado: 'Loss' },
    { id: 5, escalador: 'Renaldo Hunter', passaporte: '1399', escalados: 6, tipoAcao: 'Loja de Departamento', resultado: 'Win' },
    { id: 6, escalador: 'Ares oliveira', passaporte: '598', escalados: 3, tipoAcao: 'Estábulo', resultado: 'Win' },
    { id: 7, escalador: 'carioca Bexisde', passaporte: '2011', escalados: 4, tipoAcao: 'Penhores', resultado: 'Win' },
    { id: 8, escalador: 'Filomena Raimunda', passaporte: '100', escalados: 5, tipoAcao: 'Yellow Jack', resultado: 'Win' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-white text-2xl mb-6">Estatísticas e Histórico</h2>

      <div 
        className="rounded-lg overflow-hidden"
        style={{
          backgroundColor: '#1A1A1A',
          border: '1px solid #C0C0C0'
        }}
      >
        <div className="p-4" style={{ backgroundColor: 'rgba(106, 13, 173, 0.1)', borderBottom: '1px solid #6A0DAD' }}>
          <h3 className="text-white">📊 Histórico de Todas as Ações Registradas</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid #C0C0C0' }}>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>ID</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Escalador</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Passaporte</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Escalados</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Tipo de Ação</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Resultado</th>
              </tr>
            </thead>
            <tbody>
              {historicoAcoes.map((acao, idx) => (
                <tr 
                  key={acao.id}
                  style={{ 
                    backgroundColor: idx % 2 === 0 ? 'rgba(26, 26, 26, 0.5)' : 'transparent',
                    borderBottom: '1px solid rgba(192, 192, 192, 0.2)'
                  }}
                >
                  <td className="p-4 text-white">#{acao.id}</td>
                  <td className="p-4 text-white">{acao.escalador}</td>
                  <td className="p-4 text-white">{acao.passaporte}</td>
                  <td className="p-4 text-white">{acao.escalados}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Target size={16} color="#C0C0C0" />
                      <span className="text-white">{acao.tipoAcao}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span 
                      className="px-3 py-1 rounded"
                      style={{
                        backgroundColor: acao.resultado === 'Win' 
                          ? 'rgba(106, 13, 173, 0.2)' 
                          : 'rgba(217, 54, 54, 0.2)',
                        border: `1px solid ${acao.resultado === 'Win' ? '#6A0DAD' : '#D93636'}`,
                        color: '#FFFFFF'
                      }}
                    >
                      {acao.resultado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div 
          className="p-6 rounded-lg text-center"
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #C0C0C0'
          }}
        >
          <p style={{ color: '#BFBFBF' }}>Total de Ações</p>
          <p className="text-white text-3xl mt-2">{historicoAcoes.length}</p>
        </div>
        <div 
          className="p-6 rounded-lg text-center"
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #C0C0C0'
          }}
        >
          <p style={{ color: '#BFBFBF' }}>Wins</p>
          <p className="text-white text-3xl mt-2">
            {historicoAcoes.filter(a => a.resultado === 'Win').length}
          </p>
        </div>
        <div 
          className="p-6 rounded-lg text-center"
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #C0C0C0'
          }}
        >
          <p style={{ color: '#BFBFBF' }}>Winrate</p>
          <p className="text-white text-3xl mt-2">
            {Math.round((historicoAcoes.filter(a => a.resultado === 'Win').length / historicoAcoes.length) * 100)}%
          </p>
        </div>
      </div>
    </div>
  );
}
