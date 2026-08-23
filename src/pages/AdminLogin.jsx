import React, { useState } from 'react';
import AdminPage from './AdminPage.jsx';
import { supabase } from '../lib/supabase.js';

/* ─────────────────────────────────────────────────────
   Kovalam Panchayat Admin Login
   Matches site branding: warm amber tones, clean, minimal
───────────────────────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .al-page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fffbf0;
    font-family: 'Inter', sans-serif;
    padding: 24px;
    position: relative;
    overflow: hidden;
  }

  /* Soft decorative background shapes */
  .al-bg-shape {
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
  }
  .al-bg-shape-1 {
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%);
    top: -200px; right: -150px;
  }
  .al-bg-shape-2 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%);
    bottom: -100px; left: -100px;
  }

  /* Card */
  .al-card {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 420px;
    background: #ffffff;
    border: 1px solid #fde68a;
    border-radius: 20px;
    padding: 40px 36px 36px;
    box-shadow:
      0 4px 6px rgba(180,83,9,0.04),
      0 20px 60px rgba(180,83,9,0.10);
  }

  /* Header */
  .al-header { text-align: center; margin-bottom: 32px; }
  .al-logo-wrap {
    width: 72px; height: 72px;
    margin: 0 auto 16px;
    border-radius: 18px;
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    border: 2px solid #fcd34d;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 16px rgba(245,158,11,0.2);
  }
  .al-logo-wrap img { width: 44px; height: 44px; object-fit: contain; }
  .al-title {
    font-size: 22px;
    font-weight: 800;
    color: #78350f;
    letter-spacing: -0.3px;
    margin-bottom: 4px;
  }
  .al-subtitle { font-size: 13px; color: #92400e; opacity: 0.7; }

  /* Divider */
  .al-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, #fde68a, transparent);
    margin: 0 -36px 28px;
  }

  /* Fields */
  .al-field { margin-bottom: 18px; }
  .al-label {
    display: block;
    font-size: 12px;
    font-weight: 700;
    color: #92400e;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 7px;
  }
  .al-input-wrap { position: relative; display: flex; align-items: center; }
  .al-input-icon {
    position: absolute;
    left: 13px;
    font-size: 15px;
    pointer-events: none;
    opacity: 0.45;
  }
  .al-input {
    width: 100%;
    background: #fffbf0;
    border: 1.5px solid #fde68a;
    border-radius: 10px;
    padding: 11px 13px 11px 40px;
    color: #1c1917;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    outline: none;
    transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
  }
  .al-input::placeholder { color: #d97706; opacity: 0.4; }
  .al-input:focus {
    border-color: #f59e0b;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(245,158,11,0.15);
  }
  .al-pw-toggle {
    position: absolute; right: 12px;
    background: none; border: none;
    cursor: pointer; padding: 0;
    font-size: 15px; opacity: 0.4;
    transition: opacity 0.15s;
    display: flex; align-items: center;
  }
  .al-pw-toggle:hover { opacity: 0.8; }

  /* Error */
  .al-error {
    display: flex; align-items: flex-start; gap: 9px;
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 9px;
    padding: 10px 13px;
    margin-bottom: 16px;
    font-size: 13px;
    color: #b91c1c;
    line-height: 1.5;
    animation: errShake 0.3s ease;
  }
  @keyframes errShake {
    0%,100%{transform:translateX(0)} 25%{transform:translateX(-5px)} 75%{transform:translateX(5px)}
  }

  /* Submit */
  .al-btn {
    width: 100%;
    padding: 13px;
    margin-top: 6px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    letter-spacing: 0.02em;
    transition: all 0.2s;
    box-shadow: 0 4px 16px rgba(217,119,6,0.3);
    display: flex; align-items: center; justify-content: center; gap: 8px;
  }
  .al-btn:hover:not(:disabled) {
    background: linear-gradient(135deg, #fbbf24, #b45309);
    box-shadow: 0 6px 22px rgba(217,119,6,0.38);
    transform: translateY(-1px);
  }
  .al-btn:active:not(:disabled) { transform: scale(0.99); }
  .al-btn:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }

  /* Spinner */
  .al-spin {
    width: 15px; height: 15px;
    border: 2px solid rgba(255,255,255,0.35);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.55s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* Footer */
  .al-footer {
    margin-top: 24px;
    text-align: center;
    font-size: 11.5px;
    color: #d97706;
    opacity: 0.55;
  }

  /* Responsive */
  @media (max-width: 480px) {
    .al-card { padding: 32px 24px 28px; }
    .al-divider { margin: 0 -24px 24px; }
  }
`;

export default function AdminLogin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw]     = useState(false);
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      let loggedIn = false;

      // 1. Try Supabase login check
      try {
        const { data, error: dbErr } = await supabase
          .from('admin')
          .select('id')
          .eq('username', username.trim())
          .eq('password', password)
          .maybeSingle();

        if (!dbErr && data) {
          loggedIn = true;
        }
      } catch (netErr) {
        console.warn('Supabase login query failed, checking fallback credentials:', netErr);
      }

      // 2. Fallback check for default admin credentials ('admin' / 'admin123')
      if (!loggedIn && username.trim() === 'admin' && password === 'admin123') {
        loggedIn = true;
      }

      if (loggedIn) {
        setAuthenticated(true);
      } else {
        setError('Incorrect username or password.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (authenticated) return <AdminPage onLogout={() => setAuthenticated(false)} />;

  return (
    <>
      <style>{CSS}</style>
      <div className="al-page">
        <div className="al-bg-shape al-bg-shape-1" />
        <div className="al-bg-shape al-bg-shape-2" />

        <div className="al-card">
          {/* Header */}
          <div className="al-header">
            <div className="al-logo-wrap">
              <img src="/assets/icons/TamilNadu_Logo.svg" alt="Kovalam Panchayat" />
            </div>
            <h1 className="al-title">Admin Portal</h1>
            <p className="al-subtitle">Kovalam Panchayat — Secure Access</p>
          </div>

          <div className="al-divider" />

          {/* Error */}
          {error && (
            <div className="al-error" role="alert">
              <span>⚠</span>
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            <div className="al-field">
              <label className="al-label" htmlFor="al-user">Username</label>
              <div className="al-input-wrap">
                <span className="al-input-icon">👤</span>
                <input
                  id="al-user"
                  className="al-input"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  autoComplete="username"
                  autoFocus
                  required
                />
              </div>
            </div>

            <div className="al-field">
              <label className="al-label" htmlFor="al-pass">Password</label>
              <div className="al-input-wrap">
                <span className="al-input-icon">🔒</span>
                <input
                  id="al-pass"
                  className="al-input"
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="al-pw-toggle"
                  onClick={() => setShowPw((v) => !v)}
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                >
                  {showPw ? '🙈' : '👁'}
                </button>
              </div>
            </div>

            <button type="submit" className="al-btn" disabled={loading}>
              {loading ? (
                <><span className="al-spin" /> Signing in…</>
              ) : (
                'Sign In →'
              )}
            </button>
          </form>

          <p className="al-footer">© 2025 Kovalam Panchayat. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
