import { useState } from 'react';
import { Save, Plus, Trash2, Shield } from 'lucide-react';

interface Oficial {
  id: number;
  nome: string;
  passaporte: string;
  patente: string;
}

export default function ConfiguracoesTab() {
  const [userRole] = useState('Comando'); // Simula role do usuário
  const [oficiais, setOficiais] = useState<Oficial[]>([
    { id: 1, nome: 'Filomena Raimunda', passaporte: '100', patente: 'Comando' },
    { id: 2, nome: 'Renaldo Hunter', passaporte: '1399', patente: 'Subcomando' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newOficial, setNewOficial] = useState({
    nome: '',
    passaporte: '',
    patente: ''
  });

  const canEdit = ['Comando', 'Subcomando', 'Chefe de Operações'].includes(userRole);

  const patentes = [
    'Comando',
    'Subcomando',
    'Chefe de Operações',
    'Supervisor',
    'Chefe de Instruções',
    'Instrutor',
    'Especialista',
    'Operador',
    'Probatório',
    'Estagiário'
  ];

  const handleAddOficial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canEdit) return;
    
    setOficiais([...oficiais, {
      id: oficiais.length + 1,
      nome: newOficial.nome,
      passaporte: newOficial.passaporte,
      patente: newOficial.patente
    }]);
    
    setNewOficial({ nome: '', passaporte: '', patente: '' });
    setShowAddForm(false);
  };

  const handleRemoveOficial = (id: number) => {
    if (!canEdit) return;
    setOficiais(oficiais.filter(o => o.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-white text-2xl mb-6">Configurações</h2>

      {/* Permission Notice */}
      <div 
        className="p-4 rounded-lg mb-6 flex items-center gap-3"
        style={{
          backgroundColor: canEdit ? 'rgba(106, 13, 173, 0.1)' : 'rgba(217, 54, 54, 0.1)',
          border: `1px solid ${canEdit ? '#6A0DAD' : '#D93636'}`
        }}
      >
        <Shield size={24} color={canEdit ? '#6A0DAD' : '#D93636'} />
        <div>
          <p className="text-white">Seu cargo atual: <strong>{userRole}</strong></p>
          <p style={{ color: '#BFBFBF' }}>
            {canEdit 
              ? 'Você tem permissão para editar oficiais.'
              : 'Apenas Comando, Subcomando e Chefe de Operações podem editar oficiais.'
            }
          </p>
        </div>
      </div>

      {/* Add Officer Section */}
      {canEdit && (
        <div className="mb-6">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 px-6 py-3 text-white rounded transition-all duration-300"
            style={{
              backgroundColor: '#1A1A1A',
              border: '2px solid #D93636'
            }}
          >
            <Plus size={20} />
            Adicionar Oficial
          </button>

          {showAddForm && (
            <div 
              className="mt-4 p-6 rounded-lg"
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #C0C0C0'
              }}
            >
              <h3 className="text-white mb-4">Novo Oficial</h3>
              <form onSubmit={handleAddOficial} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block mb-2 text-white">Nome</label>
                    <input
                      type="text"
                      value={newOficial.nome}
                      onChange={(e) => setNewOficial({ ...newOficial, nome: e.target.value })}
                      className="w-full px-4 py-3 rounded text-white outline-none"
                      style={{
                        backgroundColor: 'rgba(26, 26, 26, 0.8)',
                        border: '2px solid #D93636'
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-white">Passaporte</label>
                    <input
                      type="text"
                      value={newOficial.passaporte}
                      onChange={(e) => setNewOficial({ ...newOficial, passaporte: e.target.value })}
                      className="w-full px-4 py-3 rounded text-white outline-none"
                      style={{
                        backgroundColor: 'rgba(26, 26, 26, 0.8)',
                        border: '2px solid #D93636'
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-white">Patente</label>
                    <select
                      value={newOficial.patente}
                      onChange={(e) => setNewOficial({ ...newOficial, patente: e.target.value })}
                      className="w-full px-4 py-3 rounded text-white outline-none"
                      style={{
                        backgroundColor: 'rgba(26, 26, 26, 0.8)',
                        border: '2px solid #D93636'
                      }}
                      required
                    >
                      <option value="">Selecione...</option>
                      {patentes.map(p => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 text-white rounded transition-all duration-300"
                  style={{
                    backgroundColor: '#1A1A1A',
                    border: '2px solid #D93636'
                  }}
                >
                  <Save size={20} />
                  Salvar
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* Officers List */}
      <div 
        className="rounded-lg overflow-hidden"
        style={{
          backgroundColor: '#1A1A1A',
          border: '1px solid #C0C0C0'
        }}
      >
        <div className="p-4" style={{ backgroundColor: 'rgba(217, 54, 54, 0.1)', borderBottom: '1px solid #D93636' }}>
          <h3 className="text-white">Gerenciar Oficiais</h3>
        </div>

        <div className="p-6 space-y-3">
          {oficiais.map((oficial) => (
            <div 
              key={oficial.id}
              className="flex items-center justify-between p-4 rounded"
              style={{
                backgroundColor: 'rgba(13, 13, 13, 0.5)',
                border: '1px solid rgba(192, 192, 192, 0.3)'
              }}
            >
              <div>
                <p className="text-white">{oficial.nome}</p>
                <p style={{ color: '#BFBFBF' }}>Passaporte: {oficial.passaporte} | Patente: {oficial.patente}</p>
              </div>
              {canEdit && (
                <button
                  onClick={() => handleRemoveOficial(oficial.id)}
                  className="p-2 rounded transition-all duration-300 hover:bg-red-900"
                  style={{
                    border: '1px solid #D93636'
                  }}
                >
                  <Trash2 size={18} color="#D93636" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* System Info */}
      <div 
        className="mt-6 p-4 rounded-lg text-center"
        style={{
          backgroundColor: 'rgba(26, 26, 26, 0.8)',
          border: '1px solid rgba(192, 192, 192, 0.3)'
        }}
      >
        <p style={{ color: '#BFBFBF' }}>
          Sistema interno TOR ©2025 — Gerenciado automaticamente
        </p>
      </div>
    </div>
  );
}
