import { useState } from 'react';
import { AlertTriangle, Plus, CheckCircle } from 'lucide-react';

interface Advertencia {
  id: number;
  nome: string;
  passaporte: string;
  tipo: string;
  descricao: string;
  ativa: boolean;
}

export default function AdvertenciasTab() {
  const [advertencias, setAdvertencias] = useState<Advertencia[]>([
    { id: 1, nome: 'João Silva', passaporte: '1234', tipo: 'Adv 1', descricao: '3 dias afastado', ativa: true },
    { id: 2, nome: 'Maria Santos', passaporte: '5678', tipo: 'Adv 2', descricao: '5 dias + possível rebaixamento', ativa: true },
    { id: 3, nome: 'Pedro Costa', passaporte: '9012', tipo: 'Adv 3', descricao: 'Exoneração', ativa: true },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newAdv, setNewAdv] = useState({
    nome: '',
    passaporte: '',
    tipo: '',
    descricao: ''
  });

  const finalizarAdvertencia = (id: number) => {
    setAdvertencias(advertencias.map(adv => 
      adv.id === id ? { ...adv, ativa: false } : adv
    ));
  };

  const registrarAdvertencia = (e: React.FormEvent) => {
    e.preventDefault();
    setAdvertencias([...advertencias, {
      id: advertencias.length + 1,
      nome: newAdv.nome,
      passaporte: newAdv.passaporte,
      tipo: newAdv.tipo,
      descricao: newAdv.descricao,
      ativa: true
    }]);
    setNewAdv({ nome: '', passaporte: '', tipo: '', descricao: '' });
    setShowForm(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-2xl">Advertências</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-6 py-3 text-white rounded transition-all duration-300 hover:shadow-lg"
          style={{
            backgroundColor: '#1A1A1A',
            border: '2px solid #D93636'
          }}
        >
          <Plus size={20} />
          Registrar Nova Advertência
        </button>
      </div>

      {showForm && (
        <div 
          className="p-6 rounded-lg mb-6"
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #C0C0C0'
          }}
        >
          <h3 className="text-white mb-4">Nova Advertência</h3>
          <form onSubmit={registrarAdvertencia} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-white">Nome do Oficial</label>
                <input
                  type="text"
                  value={newAdv.nome}
                  onChange={(e) => setNewAdv({ ...newAdv, nome: e.target.value })}
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
                  value={newAdv.passaporte}
                  onChange={(e) => setNewAdv({ ...newAdv, passaporte: e.target.value })}
                  className="w-full px-4 py-3 rounded text-white outline-none"
                  style={{
                    backgroundColor: 'rgba(26, 26, 26, 0.8)',
                    border: '2px solid #D93636'
                  }}
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-white">Tipo</label>
                <select
                  value={newAdv.tipo}
                  onChange={(e) => setNewAdv({ ...newAdv, tipo: e.target.value })}
                  className="w-full px-4 py-3 rounded text-white outline-none"
                  style={{
                    backgroundColor: 'rgba(26, 26, 26, 0.8)',
                    border: '2px solid #D93636'
                  }}
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="Adv 1">Adv 1</option>
                  <option value="Adv 2">Adv 2</option>
                  <option value="Adv 3">Adv 3</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-white">Descrição</label>
                <input
                  type="text"
                  value={newAdv.descricao}
                  onChange={(e) => setNewAdv({ ...newAdv, descricao: e.target.value })}
                  className="w-full px-4 py-3 rounded text-white outline-none"
                  style={{
                    backgroundColor: 'rgba(26, 26, 26, 0.8)',
                    border: '2px solid #D93636'
                  }}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-6 py-3 text-white rounded transition-all duration-300"
              style={{
                backgroundColor: '#1A1A1A',
                border: '2px solid #D93636'
              }}
            >
              Adicionar
            </button>
          </form>
        </div>
      )}

      <div className="grid gap-4">
        {advertencias.filter(adv => adv.ativa).map((adv) => (
          <div 
            key={adv.id}
            className="p-6 rounded-lg flex items-center justify-between"
            style={{
              backgroundColor: '#1A1A1A',
              border: '2px solid #D93636'
            }}
          >
            <div className="flex items-center gap-4">
              <AlertTriangle size={24} color="#D93636" />
              <div>
                <p className="text-white">{adv.nome} - Passaporte: {adv.passaporte}</p>
                <p style={{ color: '#BFBFBF' }}>{adv.tipo} → {adv.descricao}</p>
              </div>
            </div>
            <button
              onClick={() => finalizarAdvertencia(adv.id)}
              className="flex items-center gap-2 px-6 py-2 text-white rounded transition-all duration-300"
              style={{
                backgroundColor: 'rgba(106, 13, 173, 0.2)',
                border: '1px solid #6A0DAD'
              }}
            >
              <CheckCircle size={18} />
              Finalizar
            </button>
          </div>
        ))}
      </div>

      {advertencias.filter(adv => !adv.ativa).length > 0 && (
        <>
          <h3 className="text-white text-xl mt-8 mb-4">Advertências Finalizadas</h3>
          <div className="grid gap-4">
            {advertencias.filter(adv => !adv.ativa).map((adv) => (
              <div 
                key={adv.id}
                className="p-6 rounded-lg opacity-50"
                style={{
                  backgroundColor: '#1A1A1A',
                  border: '1px solid #C0C0C0'
                }}
              >
                <div className="flex items-center gap-4">
                  <CheckCircle size={24} color="#6A0DAD" />
                  <div>
                    <p className="text-white">{adv.nome} - Passaporte: {adv.passaporte}</p>
                    <p style={{ color: '#BFBFBF' }}>{adv.tipo} → {adv.descricao} (Finalizada)</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
