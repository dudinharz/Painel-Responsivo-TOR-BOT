import torLogo from 'figma:asset/3efa35233879d526af095a82194622f2407abb03.png';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="text-center">
        <img 
          src={torLogo} 
          alt="T.O.R Logo" 
          className="w-64 h-64 mx-auto mb-8"
        />
        <h1 className="text-white mb-2">T.O.R - Tático Ostensivo de Repressão</h1>
        <p className="mb-8" style={{ color: '#BFBFBF' }}>Painel de Registro Operacional</p>
        <button
          onClick={onLogin}
          className="px-12 py-3 text-white transition-all duration-300 hover:shadow-lg"
          style={{ 
            backgroundColor: '#1A1A1A',
            border: '2px solid #D93636',
            borderRadius: '4px'
          }}
        >
          Acessar Painel
        </button>
      </div>
    </div>
  );
}
