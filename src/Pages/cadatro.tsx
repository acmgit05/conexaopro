import { useState } from 'react'
import { cadastrarAluno } from '../services/auth'

export default function Cadastro() {
  const [matricula, setMatricula] = useState('')
  const [nome, setNome] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [cargo, setCargo] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    await cadastrarAluno(matricula, nome, dataNascimento, cargo)
    alert('Aluno cadastrado com sucesso!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Matrícula" value={matricula} onChange={e => setMatricula(e.target.value)} />
      <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
      <input placeholder="Data de nascimento" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} />
      <input placeholder="Cargo" value={cargo} onChange={e => setCargo(e.target.value)} />
      <button type="submit">Cadastrar</button>
    </form>
  )
}
