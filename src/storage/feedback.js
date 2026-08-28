import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pcxakufvfewarwrcjerj.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjeGFrdWZ2ZmV3YXJ3cmNqZXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyMzkyMTEsImV4cCI6MjEwMDgxNTIxMX0.KdlfimmAcBWAwZrjv6rctNLAXNJvywJMD45ptUUFGA4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});

export async function getFeedback() {
  try {
    const { data, error } = await supabase
      .from('feedback')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      // Fallback order by id desc if created_at is not present
      const fallback = await supabase
        .from('feedback')
        .select('*')
        .order('id', { ascending: false });

      if (fallback.error) {
        console.error('Supabase fetch error:', fallback.error);
        return [];
      }
      return Array.isArray(fallback.data) ? fallback.data : [];
    }

    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error('Supabase getFeedback exception:', err);
    return [];
  }
}

export async function saveFeedback(entry) {
  const isAnonymous = Boolean(entry.anonymous);
  const feedbackName = isAnonymous ? 'Anonymous' : (entry.name?.trim() || 'Anonymous');
  const feedbackType = entry.feedback_type || entry.type || 'Good';
  const feedbackDepartment = entry.department || null;
  const ratingValue = entry.rating ? Number(entry.rating) : 5;
  const messageText = entry.message?.trim() || '';

  const insertPayload = {
    language: entry.language || 'en',
    name: feedbackName,
    rating: ratingValue,
    feedback_type: feedbackType,
    department: feedbackDepartment,
    anonymous: isAnonymous,
    message: messageText,
  };

  const { data, error } = await supabase
    .from('feedback')
    .insert(insertPayload)
    .select()
    .single();

  if (error) {
    console.error('Supabase saveFeedback error:', error);
    throw error;
  }

  return { ...data, type: data.feedback_type || feedbackType };
}

export async function deleteFeedback(id) {
  const { error } = await supabase.from('feedback').delete().eq('id', id);
  if (error) {
    console.error('Supabase deleteFeedback error:', error);
    throw error;
  }
}