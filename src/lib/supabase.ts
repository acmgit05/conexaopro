import { createClient } from '@supabase/supabase-js';

// Puxa as variáveis de ambiente protegidas do Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Inicializa e exporta o cliente do banco de dados para todo o projeto usar
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
