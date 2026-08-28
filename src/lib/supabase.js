import { createClient } from '@supabase/supabase-js';

// Project ref: pcxakufvfewarwrcjerj
const SUPABASE_URL = 'https://pcxakufvfewarwrcjerj.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjeGFrdWZ2ZmV3YXJ3cmNqZXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyMzkyMTEsImV4cCI6MjEwMDgxNTIxMX0.KdlfimmAcBWAwZrjv6rctNLAXNJvywJMD45ptUUFGA4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
