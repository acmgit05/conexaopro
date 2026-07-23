import { supabase } from '../src/lib/supabase'

async function corrigirAlunos() {
  // 1. Buscar todos os alunos sem usuário vinculado
  const { data: alunos, error } = await supabase
    .from('alunos')
    .select('*')
    .is('usuario_id', null)

  if (error) {
    console.error('Erro ao buscar alunos:', error.message)
    return
  }

  for (const aluno of alunos || []) {
    try {
      // 2. Criar usuário no Supabase Auth
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: `${aluno.matricula}@escola.com`,
        password: aluno.data_nascimento // precisa estar no formato YYYY-MM-DD
      })

      if (signUpError) {
        console.error(`Erro ao criar usuário para ${aluno.matricula}:`, signUpError.message)
        continue
      }

      // 3. Atualizar a tabela alunos com o usuario_id
      await supabase
        .from('alunos')
        .update({ usuario_id: data.user?.id })
        .eq('matricula', aluno.matricula)

      console.log(`Aluno ${aluno.matricula} corrigido com sucesso!`)
    } catch (err: any) {
      console.error(`Erro inesperado para ${aluno.matricula}:`, err.message)
    }
  }
}

corrigirAlunos()
