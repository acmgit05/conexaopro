export const TickerNoticias = () => {
  // Notícias simuladas baseadas nos 7 setores de ensino da unidade Barreto
  const noticias = [
    "📢 [TI]: Inscrições abertas para a Maratona de Programação Web 2026!",
    "⚡ [ELÉTRICA]: Novo módulo de Energia Solar Fotovoltaica começa na próxima segunda-feira.",
    "🚗 [MECÂNICA]: Senai Barreto recebe novos motores turbo para aulas práticas de diagnóstico.",
    "👨‍🏭 [METALMECÂNICA]: Workshop de Solda TIG Avançada com certificação industrial nesta sexta.",
    "🍞 [CONFEITARIA]: Alunos do turno da noite realizam exposição de panificação artesanal no pátio.",
    "🤖 [FABLAB]: Impressoras 3D atualizadas com filamentos flexíveis de engenharia.",
    "🧱 [CONSTRUÇÃO CIVIL]: Palestra sobre Alvenaria Estrutural e sustentabilidade amanhã às 19h."
  ];

  // Duplicamos a lista para criar um efeito visual contínuo e infinito sem quebras
  const listaDuplicada = [...noticias, ...noticias];

  return (
    <div className="w-full bg-[#004A7F] text-white py-2 overflow-hidden shadow-inner relative flex items-center">
      {/* Etiqueta fixa estilo Jornal/Bolsa */}
      <div className="absolute left-0 top-0 bottom-0 bg-cyan-500 text-slate-950 font-black text-xs px-4 flex items-center z-10 shadow-md uppercase tracking-wider select-none">
        Radar Senai 📊
      </div>
      
      {/* Container da animação do letreiro da B3 */}
      <div className="flex whitespace-nowrap animate-marquee pl-32 hover:[animation-play-state:paused] cursor-pointer">
        {listaDuplicada.map((noticia, idx) => (
          <span key={idx} className="text-xs font-bold mx-8 tracking-wide flex items-center gap-2">
            <span className="text-cyan-300">●</span> {noticia}
          </span>
        ))}
      </div>
    </div>
  );
};
