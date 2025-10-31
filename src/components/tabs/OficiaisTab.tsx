interface Oficial {
  id: number;
  nome: string;
  passaporte: string;
  patente: string;
  escalacoes: number;
}

export default function OficiaisTab() {
  const oficiais: Oficial[] = [
    { id: 1, nome: 'Filomena Raimunda Solange Santos', passaporte: '100', patente: 'Comando', escalacoes: 45 },
    { id: 2, nome: 'Renaldo Hunter', passaporte: '1399', patente: 'Subcomando', escalacoes: 42 },
    { id: 3, nome: 'Ares oliveira', passaporte: '598', patente: 'Chefe de Operações', escalacoes: 38 },
    { id: 4, nome: 'COUTO SS. GIVANILDO', passaporte: '6983', patente: 'Supervisor', escalacoes: 35 },
    { id: 5, nome: 'Tura Kalashnikov', passaporte: '10159', patente: 'Chefe de Instruções', escalacoes: 32 },
    { id: 6, nome: 'Duda RMZ', passaporte: '7564', patente: 'Instrutor', escalacoes: 28 },
    { id: 7, nome: 'Mosquito Cartier Bexisde', passaporte: '3002', patente: 'Especialista', escalacoes: 25 },
    { id: 8, nome: 'carioca Bexisde', passaporte: '2011', patente: 'Especialista', escalacoes: 22 },
    { id: 9, nome: 'Henry Verstappen', passaporte: '2323', patente: 'Operador', escalacoes: 18 },
    { id: 10, nome: 'João Silva', passaporte: '4455', patente: 'Operador', escalacoes: 15 },
    { id: 11, nome: 'Maria Santos', passaporte: '5566', patente: 'Probatório', escalacoes: 12 },
    { id: 12, nome: 'Pedro Costa', passaporte: '7788', patente: 'Probatório', escalacoes: 10 },
    { id: 13, nome: 'Ana Oliveira', passaporte: '9900', patente: 'Estagiário', escalacoes: 5 },
    { id: 14, nome: 'Carlos Mendes', passaporte: '1122', patente: 'Estagiário', escalacoes: 3 },
  ];

  const getRowBackground = (index: number) => {
    return index % 2 === 0 ? 'rgba(26, 26, 26, 0.5)' : 'transparent';
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-white text-2xl mb-6">Lista de Oficiais</h2>

      <div 
        className="rounded-lg overflow-hidden"
        style={{
          backgroundColor: '#1A1A1A',
          border: '1px solid #C0C0C0'
        }}
      >
        <div className="p-4" style={{ backgroundColor: 'rgba(217, 54, 54, 0.1)', borderBottom: '1px solid #D93636' }}>
          <h3 className="text-white">👮 Todos os Oficiais da Unidade</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid #C0C0C0' }}>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Nome</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Passaporte</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Patente</th>
                <th className="text-left p-4" style={{ color: '#BFBFBF' }}>Escalações</th>
              </tr>
            </thead>
            <tbody>
              {oficiais.map((oficial, idx) => (
                <tr 
                  key={oficial.id}
                  style={{ 
                    backgroundColor: getRowBackground(idx),
                    borderBottom: '1px solid rgba(192, 192, 192, 0.2)'
                  }}
                >
                  <td className="p-4 text-white">{oficial.nome}</td>
                  <td className="p-4 text-white">{oficial.passaporte}</td>
                  <td className="p-4 text-white">{oficial.patente}</td>
                  <td className="p-4 text-white">{oficial.escalacoes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div 
        className="mt-6 p-4 rounded-lg"
        style={{
          backgroundColor: 'rgba(106, 13, 173, 0.1)',
          border: '1px solid #6A0DAD'
        }}
      >
        <p style={{ color: '#BFBFBF' }}>
          ℹ️ Somente <strong className="text-white">Comando</strong>, <strong className="text-white">Subcomando</strong> e <strong className="text-white">Chefe de Operações</strong> podem editar oficiais nas configurações.
        </p>
      </div>
    </div>
  );
}
