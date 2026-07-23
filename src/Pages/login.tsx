import { loginAluno } from '../services/auth'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../componentes/Logo';

export default function Login() {
  console.log("Login carregado");

  const navigate = useNavigate();
  const [matricula, setMatricula] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setCarregando(true);

    if (!matricula || !dataNascimento) {
      setErro('Por favor, preencha todos os campos.');
      setCarregando(false);
      return;
    }

    try {
      // 🔑 Agora usamos o Supabase Auth
      await loginAluno(matricula.trim(), dataNascimento);

      // Se deu certo, podemos salvar algo no localStorage
      localStorage.setItem('@conexaopro:usuario', matricula);

      // Redireciona para o feed
      navigate('/feed');
    } catch (err: any) {
      setErro('Matrícula ou Data de Nascimento inválida.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 font-sans">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <h2 className="mt-6 text-center text-2xl font-bold text-slate-900">Acesse sua conta</h2>
          <p className="mt-1.5 text-center text-sm text-slate-500">Unidade Barreto - Niterói</p>
        </div>
        
        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {erro && (
            <div className="p-3.5 text-sm text-red-600 bg-red-50 rounded-xl border border-red-100 font-medium">
              {erro}
            </div>
          )}

          {/* Campos continuam iguais */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Matrícula ou ID Aluno</label>
              <input
                type="text"
                required
                disabled={carregando}
                className="appearance-none rounded-xl block w-full px-3.5 py-2.5 border border-slate-200 placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all sm:text-sm disabled:bg-slate-50"
                placeholder="Ex: 20260002"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Data de Nascimento</label>
              <input
                type="date"
                required
                disabled={carregando}
                className="appearance-none rounded-xl block w-full px-3.5 py-2.5 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all sm:text-sm disabled:bg-slate-50"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={carregando}
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-[#004A7F] hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/10 disabled:bg-slate-400"
            >
              {carregando ? 'Verificando Matrícula...' : 'Entrar na Rede'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
