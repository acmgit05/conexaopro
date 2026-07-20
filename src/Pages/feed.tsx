import { useState } from 'react';
import { useFeed } from '../hooks/useFeed';
import { Logo } from '../componentes/Logo';
import { TickerNoticias } from '../componentes/TickerNoticias';
import { CalendarioEventos } from '../componentes/CalendarioEventos';
import { Rodape } from '../componentes/Rodape';



// Importação com caminhos e nomes 100% idênticos à sua barra lateral
import imgTecnologia from '../assets/tecnologia.png';
import imgEletrica from '../assets/eletrica.png';
import imgMecanica from '../assets/mecanica.png'; 
import imgMetalmecanica from '../assets/metalmecanica.png';
import imgConfeitaria from '../assets/confeitaria.png';
import imgFablab from '../assets/fablab.png';
import imgConstrucao from '../assets/construcao.png';

export default function Feed() {
  const { posts, adicionarPost, alternarCurtida } = useFeed();
  const [novoPost, setNovoPost] = useState('');

  // Array de setores lendo os arquivos locais salvos por você
  const setores = [
    { nome: 'Tecnologia da Informação', img: imgTecnologia },
    { nome: 'Elétrica Predial/Ind.', img: imgEletrica },
    { nome: 'Mecânica Automotiva', img: imgMecanica },
    { nome: 'Metalmecânica / Solda', img: imgMetalmecanica },
    { nome: 'Confeitaria / Panif.', img: imgConfeitaria },
    { nome: 'FabLab / Impressão 3D', img: imgFablab },
    { nome: 'Construção Civil', img: imgConstrucao },
  ];

  // Lista da turma (Fase MVP)
  const alunosTurma = [
    { nome: 'Você (Aluno)', online: true, cargo: 'Dev Frontend' },
    { nome: 'Prof. Carlos Silva', online: true, cargo: 'Instrutor' },
    { nome: 'Mariana Santos', online: true, cargo: 'Aluna' },
    { nome: 'Lucas Almeida', online: false, cargo: 'Aluno' },
    { nome: 'Beatriz Costa', online: true, cargo: 'Aluna' },
    { nome: 'Gabriel Souza', online: false, cargo: 'Aluno' },
  ];

  const handleCriarPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoPost.trim()) return;
    adicionarPost(novoPost);
    setNovoPost('');
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 pb-12">
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />
          <div className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full uppercase tracking-wider">
            Senai Barreto • Niterói
          </div>
        </div>
      </header>
      <TickerNoticias />

      {/* GRID EM 3 COLUNAS */}
      <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* COLUNA ESQUERDA: SETORES COM IMAGENS LOCAIS */}
        <aside className="lg:col-span-3 space-y-4 sticky top-20">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <h2 className="font-black text-sm text-slate-400 uppercase tracking-wider mb-4 pl-1">
              Setores de Ensino
            </h2>
            <div className="space-y-2.5">
              {setores.map((setor, index) => (
                <button 
                  key={index} 
                  className="w-full flex items-center gap-3 p-1.5 rounded-xl border border-slate-100 hover:border-cyan-300 hover:bg-slate-50 text-left transition-all group overflow-hidden"
                >
                  <img 
                    src={setor.img} 
                    alt={setor.nome} 
                    className="h-11 w-11 rounded-lg object-cover shadow-sm group-hover:scale-105 transition-transform" 
                  />
                  <span className="text-xs font-bold text-slate-700 group-hover:text-cyan-600 transition-colors line-clamp-2">
                    {setor.nome}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* COLUNA CENTRAL: FEED */}
        <main className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <form onSubmit={handleCriarPost} className="space-y-4">
              <div className="flex gap-3">
                <div className="h-10 w-10 bg-[#004A7F] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-sm shadow-blue-900/20">
                  DEV
                </div>
                <textarea
                  value={novoPost}
                  onChange={(e) => setNovoPost(e.target.value)}
                  placeholder="O que você aprendeu ou descobriu hoje no Senai?"
                  className="w-full min-h-[80px] text-slate-700 placeholder-slate-400 border-none resize-none focus:outline-none text-sm pt-2"
                />
              </div>
              <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                <button 
                  type="button" 
                  onClick={() => alert('Na próxima fase com o Supabase, você poderá fazer upload de arquivos aqui!')}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-cyan-500 transition-colors p-2 rounded-lg hover:bg-slate-50"
                >
                  <span>📷</span> Adicionar Foto
                </button>
                <button type="submit" className="px-5 py-2 bg-[#004A7F] hover:bg-blue-900 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-blue-900/10">
                  Publicar no Feed
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center font-bold text-sm text-slate-600">
                      {post.autor.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 leading-tight">{post.autor}</h3>
                      <p className="text-xs text-slate-400 font-medium">{post.cargo}</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{post.tempo}</span>
                </div>

                <p className="text-sm text-slate-600 whitespace-pre-wrap leading-relaxed pl-1">
                  {post.conteudo}
                </p>

                <div className="flex items-center gap-4 mt-4 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => alternarCurtida(post.id)}
                    className={`flex items-center gap-1.5 text-xs font-bold transition-all px-3 py-1.5 rounded-lg ${
                      post.curtido ? 'text-cyan-600 bg-cyan-50 border border-cyan-100' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>👍</span>
                    <span>{post.curtidas} {post.curtidas === 1 ? 'Curtida' : 'Curtidas'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* COLUNA DIREITA: ALUNOS DA SALA */}
                <aside className="lg:col-span-3 space-y-4 sticky top-20">
          
          {/* 📅 O Calendário entra aqui primeiro */}
          <CalendarioEventos />

          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">

            <h2 className="font-black text-sm text-slate-400 uppercase tracking-wider mb-3 pl-1">
              Alunos na Sala (15)
            </h2>
            <div className="space-y-3">
              {alunosTurma.map((aluno, index) => (
                <div key={index} className="flex items-center justify-between p-1">
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className="h-8 w-8 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold text-slate-500 border border-slate-200">
                        {aluno.nome.substring(0,2).toUpperCase()}
                      </div>
                      <div className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white ${aluno.online ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 leading-tight">{aluno.nome}</h4>
                      <p className="text-[10px] text-slate-400 font-medium">{aluno.cargo}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-50 text-slate-400">
                    {aluno.online ? 'online' : 'offline'}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-center">
              <p className="text-[11px] font-semibold text-slate-400">
                Canal de Comunicação Local Ativo 🟢
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* 🚀 O Rodapé institucional entra aqui, logo após o fechamento do grid central */}
      <Rodape />

    </div>
  );
}
