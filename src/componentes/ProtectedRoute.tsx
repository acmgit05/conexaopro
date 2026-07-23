import { Navigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const session = supabase.auth.getSession()

  // Se não houver sessão, redireciona para login
  if (!session) {
    return <Navigate to="/login" replace />
  }

  // Se houver sessão, renderiza a rota normalmente
  return children
}
