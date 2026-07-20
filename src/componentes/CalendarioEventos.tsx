export const CalendarioEventos = () => {
  const diasMes = Array.from({ length: 31 }, (_, i) => i + 1);
  
  const eventos = {
    10: { titulo: "Maratona TI", cor: "bg-blue-500" },
    17: { titulo: "Hoje: Entrega do MVP Conexão Pro", cor: "bg-cyan-500" },
    24: { titulo: "Workshop Solda", cor: "bg-slate-600" },
    28: { titulo: "Palestra Construção", cor: "bg-amber-600" }
  };

  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mt-4">
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
        <h3 className="font-black text-sm text-slate-400 uppercase tracking-wider pl-1">
          Calendário Escolar 📅
        </h3>
        <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2.5 py-0.5 rounded-full capitalize">
          Julho 2026
        </span>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-black text-slate-400 uppercase mb-1">
        <span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center font-bold text-xs">
        <div className="p-1.5"></div>
        <div className="p-1.5"></div>
        <div className="p-1.5"></div>
        
        {diasMes.map((dia) => {
          const temEvento = dia in eventos;
          const infoEvento = temEvento ? eventos[dia as keyof typeof eventos] : null;

          return (
            <div 
              key={dia} 
              className={`p-1.5 rounded-lg relative group ${
                temEvento 
                  ? `${infoEvento?.cor} text-white font-black scale-105 shadow-sm` 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {dia}
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-[11px] font-semibold text-slate-500">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
          <span>Hoje: Entrega do MVP Conexão Pro</span>
        </div>
      </div>
    </div>
  );
};
