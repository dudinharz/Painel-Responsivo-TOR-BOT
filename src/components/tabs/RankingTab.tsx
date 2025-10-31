

interface RankingItem {
  posicao: number;
  passaporte: string;
  nome: string;
  patente: string;
  acoes?: number;
  winrate?: number;
}

export default function RankingTab() {
  const rankingAcoes: RankingItem[] = [
    { posicao: 1, passaporte: '3002', nome: 'Mosquito Cartier Bexisde', patente: 'Cabo', acoes: 22 },
    { posicao: 2, passaporte: '6983', nome: 'COUTO SS. GIVANILDO', patente: 'Terceiro Sargento', acoes: 18 },
    { posicao: 3, passaporte: '10159', nome: 'Tura Kalashnikov', patente: 'Aspirante', acoes: 15 },
    { posicao: 4, passaporte: '1399', nome: 'Renaldo Hunter', patente: 'Capitão', acoes: 14 },
    { posicao: 5, passaporte: '598', nome: 'Ares oliveira', patente: 'Subtenente', acoes: 12 },
    { posicao: 6, passaporte: '2011', nome: 'carioca Bexisde', patente: 'Cabo', acoes: 11 },
    { posicao: 7, passaporte: '7564', nome: 'Duda RMZ', patente: 'Terceiro Sargento', acoes: 10 },
    { posicao: 8, passaporte: '100', nome: 'Filomena Raimunda Solange Santos...', patente: 'Major', acoes: 9 },
    { posicao: 9, passaporte: '2323', nome: 'Henry Verstappen', patente: 'Cabo', acoes: 8 },
  ];

  const rankingWinrate: RankingItem[] = [
    { posicao: 1, passaporte: '3002', nome: 'Mosquito Cartier Bexisde', patente: 'Cabo', winrate: 95 },
    { posicao: 2, passaporte: '6983', nome: 'COUTO SS. GIVANILDO', patente: 'Terceiro Sargento', winrate: 92 },
    { posicao: 3, passaporte: '10159', nome: 'Tura Kalashnikov', patente: 'Aspirante', winrate: 88 },
  ];

  const getRowBackground = (posicao: number) => {
    if (posicao === 1) return 'rgba(255, 215, 0, 0.1)';
    if (posicao === 2) return 'rgba(192, 192, 192, 0.1)';
    if (posicao === 3) return 'rgba(205, 127, 50, 0.1)';
    return 'rgba(26, 26, 26, 0.5)';
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-white text-2xl mb-6">Ranking</h2>

      {/* Ranking por Ações */}
      <div 
        className="mb-8 rounded-lg overflow-hidden"
        style={{
          backgroundColor: '#1A1A1A',
          border: '1px solid #C0C0C0'
        }}
      >
        <div className="p-4" style={{ backgroundColor: 'rgba(217, 54, 54, 0.1)', borderBottom: '1px solid #D93636' }}>
          <h3 className="text-white">🏆 Ranking por Número de Ações</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid #C0C0C0' }}>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Posição</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Passaporte</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Nome</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Patente</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {rankingAcoes.map((item) => (
                <tr 
                  key={item.posicao}
                  style={{ 
                    backgroundColor: getRowBackground(item.posicao),
                    borderBottom: '1px solid rgba(192, 192, 192, 0.2)'
                  }}
                >
                  <td className="p-4 text-white">{item.posicao}º</td>
                  <td className="p-4 text-white">{item.passaporte}</td>
                  <td className="p-4 text-white">{item.nome}</td>
                  <td className="p-4 text-white">{item.patente}</td>
                  <td className="p-4 text-white">{item.acoes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ranking por Winrate */}
      <div 
        className="rounded-lg overflow-hidden"
        style={{
          backgroundColor: '#1A1A1A',
          border: '1px solid #C0C0C0'
        }}
      >
        <div className="p-4" style={{ backgroundColor: 'rgba(106, 13, 173, 0.1)', borderBottom: '1px solid #6A0DAD' }}>
          <h3 className="text-white">📊 Top 3 Winrate</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid #C0C0C0' }}>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Posição</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Passaporte</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Nome</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Patente</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Winrate</th>
              </tr>
            </thead>
            <tbody>
              {rankingWinrate.map((item) => (
                <tr 
                  key={item.posicao}
                  style={{ 
                    backgroundColor: getRowBackground(item.posicao),
                    borderBottom: '1px solid rgba(192, 192, 192, 0.2)'
                  }}
                >
                  <td className="p-4 text-white">{item.posicao}º</td>
                  <td className="p-4 text-white">{item.passaporte}</td>
                  <td className="p-4 text-white">{item.nome}</td>
                  <td className="p-4 text-white">{item.patente}</td>
                  <td className="p-4 text-white">{item.winrate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
