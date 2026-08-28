import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pcxakufvfewarwrncjerj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjeGFrdWZ2ZmV3YXJ3cm5jamVyaiIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzg1MjM5MjExLCJleHAiOjIxMDA4MTUyMTF9.KdlfimmAcBWAwZrjv6rctNLAXNJvywJMD45ptUUFGA4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});

const STORAGE_KEY = 'kovalam-admin-feedback';

function getLocalFeedback() {
  if (typeof window === 'undefined' || !window.localStorage) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = JSON.parse(raw || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Error reading localStorage fallback:', err);
    return [];
  }
}

function saveLocalFeedback(feedbacks) {
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbacks));
  } catch (err) {
    console.error('Error saving to localStorage fallback:', err);
  }
}

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
    console.warn('Supabase fetch error, checking local fallback:', err);
  }

  const localSaved = getLocalFeedback();
  if (localSaved.length > 0) {
    const dbIds = new Set(dbData.map((d) => String(d.id)));
    const localOnly = localSaved.filter((item) => !dbIds.has(String(item.id)));
    const combined = [...dbData, ...localOnly];
    combined.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
    return combined;
  }

  return dbData;
}

export async function saveFeedback(entry) {
  const generatedId =
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `fb-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

  const feedbackType = entry.feedback_type || entry.type || '';
  const feedbackDepartment = entry.department || null;
  const isAnonymous = Boolean(entry.anonymous);
  const feedbackName = isAnonymous ? 'Anonymous' : (entry.name?.trim() || '');

  const newEntry = {
    id: entry.id || generatedId,
    language: entry.language || 'en',
    name: feedbackName,
    rating: entry.rating ? Number(entry.rating) : 5,
    feedback_type: feedbackType,
    type: feedbackType,
    department: feedbackDepartment,
    anonymous: isAnonymous,
    message: entry.message?.trim() || '',
    created_at: entry.created_at || new Date().toISOString(),
  };

  let savedRecord = null;
  try {
    const { data, error } = await supabase
      .from('feedback')
      .insert({
        language: newEntry.language,
        name: newEntry.name,
        rating: newEntry.rating,
        feedback_type: newEntry.feedback_type,
        department: newEntry.department,
        anonymous: newEntry.anonymous,
        message: newEntry.message,
      })
      .select()
      .single();

    if (!error && data) {
      savedRecord = { ...data, type: data.feedback_type || feedbackType };
    }
  } catch (err) {
    console.warn('Supabase insert error, persisting to local storage:', err);
  }

  const finalRecord = savedRecord || newEntry;

  // Always save to localStorage so fallback and offline display work seamlessly
  const currentLocal = getLocalFeedback();
  const updatedLocal = [
    finalRecord,
    ...currentLocal.filter((item) => String(item.id) !== String(finalRecord.id)),
  ];
  saveLocalFeedback(updatedLocal);

  return finalRecord;
}

export async function deleteFeedback(id) {
  try {
    await supabase.from('feedback').delete().eq('id', id);
  } catch (err) {
    console.warn('Supabase delete error:', err);
  }

  const currentLocal = getLocalFeedback();
  const updatedLocal = currentLocal.filter((item) => String(item.id) !== String(id));
  saveLocalFeedback(updatedLocal);
}