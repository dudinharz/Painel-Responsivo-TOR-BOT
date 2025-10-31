import torLogo from 'figma:asset/3efa35233879d526af095a82194622f2407abb03.png';

export default function Header() {
  return (
    <header 
      className="py-6 border-b-2 sticky top-0 z-40"
      style={{ 
        background: 'linear-gradient(180deg, #0D0D0D 0%, #1A1A1A 100%)',
        borderColor: '#D93636',
        boxShadow: '0 4px 20px rgba(106, 13, 173, 0.2)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
          <img src={torLogo} alt="T.O.R Logo" className="w-16 h-16" />
          <div className="text-center">
            <h1 className="text-white mb-1">T.O.R - Tático Ostensivo de Repressão</h1>
            <p className="text-center" style={{ color: '#BFBFBF' }}>Painel de Registro Operacional</p>
          </div>
        </div>
      </div>
    </header>
  );
}
