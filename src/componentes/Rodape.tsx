export const Rodape = () => {
  return (
    <footer className="w-full bg-[#004A7F] text-white mt-12 border-t-4 border-[#62C3D0]">
      {/* Container Principal */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        {/* Coluna 1: Sobre a Rede */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-black tracking-tight text-lg text-white">
              Conexão<span className="text-[#62C3D0]">Pro</span>
            </span>
          </div>
          <p className="text-slate-200 text-xs leading-relaxed font-medium">
            A rede social profissional exclusiva para alunos e instrutores da Firjan SENAI da Unidade Barreto - Niterói. Compartilhando conhecimento e impulsionando carreiras.
          </p>
        </div>

        {/* Coluna 2: Links Úteis do Estudante */}
        <div className="space-y-2">
          <h4 className="font-black text-xs uppercase tracking-wider text-[#62C3D0]">
            Links Úteis
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-200 font-semibold">
            <li><a href="https://firjansenai.com.br" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">🌐 Portal Firjan SENAI</a></li>
            <li><button onClick={() => alert('Em breve: Acesso direto ao SAGRES Aluno!')} className="hover:text-white transition-colors text-left">🏫 Sistema de Notas (SAGRES)</button></li>
            <li><button onClick={() => alert('Em breve: Biblioteca Digital Firjan!')} className="hover:text-white transition-colors text-left">📚 Biblioteca Virtual</button></li>
          </ul>
        </div>

        {/* Coluna 3: Informações de Contato da Unidade */}
        <div className="space-y-2">
          <h4 className="font-black text-xs uppercase tracking-wider text-[#62C3D0]">
            Unidade Barreto
          </h4>
          <p className="text-xs text-slate-200 leading-relaxed font-medium">
            📍 Rua General Castrioto, 460 - Barreto<br />
            Niterói - RJ, CEP: 24110-256
          </p>
          <p className="text-xs text-slate-200 font-semibold pt-1">
            📞 Suporte Local: 0800 0231 231
          </p>
        </div>

      </div>

      {/* Faixa de Direitos Autorais Inferior */}
      <div className="w-full bg-[#00355c] py-3 text-center text-[10px] text-slate-300 font-medium border-t border-blue-900/40">
        © {new Date().getFullYear()} Firjan SENAI Barreto • Desenvolvido com ❤️ pela Turma de Frontend
      </div>
    </footer>
  );
};
