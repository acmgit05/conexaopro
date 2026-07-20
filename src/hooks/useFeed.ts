// src/hooks/useFeed.ts
import { useState } from 'react';

export interface Post {
  id: number;
  autor: string;
  cargo: string;
  conteudo: string;
  tempo: string;
  curtidas: number;
  curtido: boolean;
}

export const useFeed = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      autor: "Prof. Carlos Silva",
      cargo: "Instrutor de Frontend - Senai Barreto",
      conteudo: "Excelente iniciativa da turma em criar a rede Conexão Pro! Esse projeto vai enriquecer muito o portfólio de vocês.",
      tempo: "Há 10 min",
      curtidas: 5,
      curtido: false
    }
  ]);

  const adicionarPost = (conteudo: string) => {
    if (!conteudo.trim()) return;

    const novoPost: Post = {
      id: Date.now(),
      autor: "Você (Aluno Senai)",
      cargo: "Desenvolvedor Frontend Jr",
      conteudo,
      tempo: "Agora mesmo",
      curtidas: 0,
      curtido: false
    };

    setPosts([novoPost, ...posts]);
  };

  const alternarCurtida = (id: number) => {
    setPosts(prev => prev.map(post => 
      post.id === id 
        ? { ...post, curtidas: post.curtido ? post.curtidas - 1 : post.curtidas + 1, curtido: !post.curtido }
        : post
    ));
  };

  return { posts, adicionarPost, alternarCurtida };
};
