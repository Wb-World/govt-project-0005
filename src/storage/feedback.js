import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pcxakufvfewarwrncjerj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjeGFrdWZ2ZmV3YXJ3cm5jamVyaiIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzg1MjM5MjExLCJleHAiOjIxMDA4MTUyMTF9.KdlfimmAcBWAwZrjv6rctNLAXNJvywJMD45ptUUFGA4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getFeedback() {
  let dbData = [];
  try {
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && Array.isArray(data)) {
      dbData = data;
    }
  } catch (err) {
    console.warn('Supabase fetch error, checking fallback:', err);
  }

  try {
    const storageKey = 'kovalam-admin-feedback';
    const localSaved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(localSaved) && localSaved.length > 0) {
      const dbIds = new Set(dbData.map((d) => d.id));
      const localOnly = localSaved.filter((item) => !dbIds.has(item.id));
      return [...dbData, ...localOnly];
    }
  } catch (localErr) {
    console.error('Error reading localStorage fallback:', localErr);
  }

  return dbData;
}

export async function saveFeedback(entry) {
  const { data, error } = await supabase
    .from('feedback')
    .insert({
      language: entry.language,
      name: entry.name,
      rating: entry.rating ? Number(entry.rating) : null,
      feedback_type: entry.type || entry.feedback_type,
      anonymous: entry.anonymous,
      message: entry.message,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteFeedback(id) {
  const { error } = await supabase.from('feedback').delete().eq('id', id);
  if (error) throw error;
}