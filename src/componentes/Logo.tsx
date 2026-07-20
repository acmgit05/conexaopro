// src/components/Logo.tsx
export const Logo = () => {
  return (
    <div className="flex items-center gap-3 font-sans select-none">
      {/* Elemento geométrico inspirado no uniforme */}
      <div className="flex flex-col gap-0.5 transform -skew-x-12">
        <div className="h-1 w-6 bg-[#62C3D0] rounded-full animate-pulse"></div>
        <div className="h-1 w-6 bg-cyan-500 rounded-full translate-x-0.5"></div>
        <div className="h-1 w-6 bg-[#004A7F] rounded-full translate-x-1"></div>
      </div>
      
      <span className="text-xl font-black tracking-tight text-slate-950">
        Conexão<span className="text-cyan-500">Pro</span>
      </span>
    </div>
  );
};
