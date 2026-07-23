import { supabase } from '../supabaseClient'

// Cadastro
export async function cadastrarAluno(matricula: string, nome: string, dataNascimento: string, cargo: string) {
  const email = `${matricula}@escola.com`
  const senha = dataNascimento

  const { data, error } = await supabase.auth.signUp({ email, password: senha })
  if (error) throw error

  const user = data.user

  await supabase.from('alunos').insert({
    matricula,
    nome,
    data_nascimento: dataNascimento,
    cargo,
    usuario_id: user?.id
  })
}

// Login
export async function loginAluno(matricula: string, dataNascimento: string) {
  const email = `${matricula}@escola.com`
  const senha = dataNascimento

  const { data, error } = await supabase.auth.signInWithPassword({ email, password: senha })
  if (error) throw error

  return data
}

// Troca de senha
export async function trocarSenha(novaSenha: string) {
  const { error } = await supabase.auth.updateUser({ password: novaSenha })
  if (error) throw error
}
