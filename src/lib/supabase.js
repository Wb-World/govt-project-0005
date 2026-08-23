import { createClient } from '@supabase/supabase-js';

// Project ref: pcxakufvfewarwrncjerj
const SUPABASE_URL = 'https://pcxakufvfewarwrncjerj.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjeGFrdWZ2ZmV3YXJ3cm5jamVyaiIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzg1MjM5MjExLCJleHAiOjIxMDA4MTUyMTF9.KdlfimmAcBWAwZrjv6rctNLAXNJvywJMD45ptUUFGA4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
