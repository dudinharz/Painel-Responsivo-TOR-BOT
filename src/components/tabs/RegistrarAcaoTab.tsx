import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

// Mock de oficiais cadastrados
const oficiaisCadastrados = [
  { passaporte: '100', nome: 'Filomena Raimunda Solange Santos' },
  { passaporte: '1399', nome: 'Renaldo Hunter' },
  { passaporte: '598', nome: 'Ares oliveira' },
  { passaporte: '6983', nome: 'COUTO SS. GIVANILDO' },
  { passaporte: '10159', nome: 'Tura Kalashnikov' },
  { passaporte: '7564', nome: 'Duda RMZ' },
  { passaporte: '3002', nome: 'Mosquito Cartier Bexisde' },
  { passaporte: '2011', nome: 'carioca Bexisde' },
  { passaporte: '2323', nome: 'Henry Verstappen' },
];

export default function RegistrarAcaoTab() {
  const [formData, setFormData] = useState({
    passaporte: '',
    escalador: '',
    escalados: '',
    tipoAcao: '',
    resultado: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handlePassaporteChange = (passaporte: string) => {
    const oficial = oficiaisCadastrados.find(o => o.passaporte === passaporte);
    setFormData({
      ...formData,
      passaporte,
      escalador: oficial ? oficial.nome : ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        passaporte: '',
        escalador: '',
        escalados: '',
        tipoAcao: '',
        resultado: ''
      });
    }, 3000);
  };

  const tiposAcao = [
    'Yellow Jack',
    'Mergulhador',
    'Loja de Armamentos',
    'Bebidas Samir',
    'Loja de Departamento',
    'Estábulo',
    'Penhores',
    'Auditório',
    'Observatório',
    'Comedy',
    'MequiDunada',
    'Planet'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-white text-2xl mb-6">Registrar Ação</h2>

      <div 
        className="p-8 rounded-lg"
        style={{
          backgroundColor: '#1A1A1A',
          border: '1px solid #C0C0C0'
        }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-white">Passaporte do Escalador</label>
              <input
                type="text"
                value={formData.passaporte}
                onChange={(e) => handlePassaporteChange(e.target.value)}
                className="w-full px-4 py-3 rounded text-white outline-none focus:shadow-lg transition-all"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  border: '2px solid #D93636'
                }}
                placeholder="Digite o passaporte"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-white">Escalador</label>
              <input
                type="text"
                value={formData.escalador}
                className="w-full px-4 py-3 rounded text-white outline-none"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  border: '2px solid #D93636',
                  cursor: 'not-allowed'
                }}
                placeholder="Identificado automaticamente"
                disabled
                readOnly
              />
            </div>

            <div>
              <label className="block mb-2 text-white">Escalados</label>
              <input
                type="number"
                value={formData.escalados}
                onChange={(e) => setFormData({ ...formData, escalados: e.target.value })}
                className="w-full px-4 py-3 rounded text-white outline-none focus:shadow-lg transition-all"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  border: '2px solid #D93636'
                }}
                placeholder="Número de escalados"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-white">Tipo de Ação</label>
              <select
                value={formData.tipoAcao}
                onChange={(e) => setFormData({ ...formData, tipoAcao: e.target.value })}
                className="w-full px-4 py-3 rounded text-white outline-none focus:shadow-lg transition-all"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  border: '2px solid #D93636'
                }}
                required
              >
                <option value="">Selecione...</option>
                {tiposAcao.map(tipo => (
                  <option key={tipo} value={tipo}>{tipo}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-white">Resultado</label>
              <select
                value={formData.resultado}
                onChange={(e) => setFormData({ ...formData, resultado: e.target.value })}
                className="w-full px-4 py-3 rounded text-white outline-none focus:shadow-lg transition-all"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  border: '2px solid #D93636'
                }}
                required
              >
                <option value="">Selecione...</option>
                <option value="Win">Win</option>
                <option value="Loss">Loss</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="px-8 py-3 text-white rounded transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: '#1A1A1A',
                border: '2px solid #D93636'
              }}
            >
              Registrar Ação
            </button>
            <button
              type="button"
              onClick={() => setFormData({
                passaporte: '',
                escalador: '',
                escalados: '',
                tipoAcao: '',
                resultado: ''
              })}
              className="px-8 py-3 text-white rounded transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: '#1A1A1A',
                border: '2px solid #6A0DAD'
              }}
            >
              Limpar
            </button>
          </div>
        </form>

        {showSuccess && (
          <div 
            className="mt-6 p-6 rounded-lg flex items-start gap-4"
            style={{
              backgroundColor: 'rgba(106, 13, 173, 0.2)',
              border: '2px solid #6A0DAD'
            }}
          >
            <CheckCircle size={24} color="#C0C0C0" />
            <div>
              <p className="text-white mb-2">✅ Registro Finalizado</p>
              <p style={{ color: '#BFBFBF' }}>Escalador: {formData.escalador}</p>
              <p style={{ color: '#BFBFBF' }}>Passaporte: {formData.passaporte}</p>
              <p style={{ color: '#BFBFBF' }}>Escalados: {formData.escalados}</p>
              <p style={{ color: '#BFBFBF' }}>Tipo de Ação: {formData.tipoAcao}</p>
              <p style={{ color: '#BFBFBF' }}>Resultado: {formData.resultado}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
