import { useEffect, useMemo, useState, useCallback } from 'react';
import { deleteFeedback, getFeedback } from '../storage/feedback.js';

/* ─────────────────────────── design tokens ─────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:        #0f1117;
    --surface:   #1a1d27;
    --surface2:  #22263a;
    --border:    #2e3350;
    --accent:    #6c63ff;
    --accent2:   #a78bfa;
    --green:     #22c55e;
    --amber:     #f59e0b;
    --red:       #ef4444;
    --text:      #e2e8f0;
    --muted:     #8892a4;
    --radius:    10px;
    --shadow:    0 4px 24px rgba(0,0,0,.45);
  }

  body { font-family: 'Inter', sans-serif; background: var(--bg); color: var(--text); }

  /* layout */
  .adm-root   { display:flex; min-height:100vh; }
  .adm-sidebar {
    width: 220px; flex-shrink:0; background: var(--surface);
    border-right: 1px solid var(--border);
    display: flex; flex-direction:column; padding: 24px 0;
    position: sticky; top:0; height:100vh; overflow-y:auto;
  }
  .adm-logo {
    display:flex; align-items:center; gap:10px;
    padding: 0 20px 24px; border-bottom:1px solid var(--border);
  }
  .adm-logo-icon {
    width:36px; height:36px; border-radius:8px;
    background: linear-gradient(135deg,var(--accent),var(--accent2));
    display:flex; align-items:center; justify-content:center;
    font-size:18px;
  }
  .adm-logo h2 { font-size:14px; font-weight:700; line-height:1.2; }
  .adm-logo span { font-size:11px; color:var(--muted); }
  .adm-nav { padding: 16px 12px; flex:1; }
  .adm-nav-item {
    display:flex; align-items:center; gap:10px;
    padding: 10px 12px; border-radius:8px;
    font-size:13px; font-weight:500; color:var(--muted);
    cursor:pointer; transition:all .15s;
  }
  .adm-nav-item.active, .adm-nav-item:hover {
    background: var(--surface2); color: var(--text);
  }
  .adm-nav-item.active { color:var(--accent2); }

  /* main */
  .adm-main { flex:1; display:flex; flex-direction:column; overflow:hidden; }
  .adm-topbar {
    display:flex; align-items:center; justify-content:space-between;
    padding: 20px 32px; border-bottom:1px solid var(--border);
    background: var(--surface); position:sticky; top:0; z-index:10;
  }
  .adm-topbar h1 { font-size:18px; font-weight:700; }
  .adm-topbar-right { display:flex; gap:10px; align-items:center; }

  .adm-body { padding:28px 32px; overflow-y:auto; flex:1; }

  /* stats */
  .adm-stats { display:grid; grid-template-columns:repeat(auto-fill,minmax(180px,1fr)); gap:16px; margin-bottom:28px; }
  .adm-stat {
    background:var(--surface); border:1px solid var(--border);
    border-radius:var(--radius); padding:20px;
    display:flex; flex-direction:column; gap:8px;
  }
  .adm-stat-label { font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); }
  .adm-stat-value { font-size:28px; font-weight:700; }
  .adm-stat-sub { font-size:12px; color:var(--muted); }
  .adm-stat-icon { font-size:22px; margin-bottom:4px; }

  /* toolbar */
  .adm-toolbar { display:flex; gap:12px; align-items:center; margin-bottom:20px; flex-wrap:wrap; }
  .adm-search {
    flex:1; min-width:200px; max-width:360px;
    display:flex; align-items:center; gap:8px;
    background:var(--surface); border:1px solid var(--border);
    border-radius:8px; padding:0 14px;
  }
  .adm-search input {
    flex:1; background:none; border:none; outline:none;
    color:var(--text); font-size:13px; padding:10px 0;
    font-family:inherit;
  }
  .adm-search input::placeholder { color:var(--muted); }

  .adm-btn {
    display:inline-flex; align-items:center; gap:6px;
    padding:9px 18px; border-radius:8px; font-size:13px;
    font-weight:600; cursor:pointer; border:none;
    transition:all .15s; font-family:inherit;
  }
  .adm-btn-primary { background:var(--accent); color:#fff; }
  .adm-btn-primary:hover { background:#7c73ff; }
  .adm-btn-ghost {
    background:var(--surface); color:var(--muted);
    border:1px solid var(--border);
  }
  .adm-btn-ghost:hover { color:var(--text); border-color:var(--accent); }
  .adm-btn-danger { background:#7f1d1d; color:#fca5a5; border:1px solid #b91c1c; }
  .adm-btn-danger:hover { background:#991b1b; }
  .adm-btn-sm { padding:6px 12px; font-size:12px; }

  /* table */
  .adm-table-wrap {
    background:var(--surface); border:1px solid var(--border);
    border-radius:var(--radius); overflow:hidden; box-shadow:var(--shadow);
  }
  .adm-table { width:100%; border-collapse:collapse; font-size:13px; }
  .adm-table thead { background:var(--surface2); }
  .adm-table th {
    padding:13px 16px; text-align:left;
    font-size:11px; font-weight:600; text-transform:uppercase;
    letter-spacing:.05em; color:var(--muted);
    white-space:nowrap;
  }
  .adm-table td { padding:13px 16px; border-top:1px solid var(--border); vertical-align:middle; }
  .adm-table tr:hover td { background:var(--surface2); }

  /* badges */
  .badge {
    display:inline-flex; align-items:center; gap:4px;
    padding:3px 10px; border-radius:999px; font-size:11px; font-weight:600;
  }
  .badge-en   { background:#1e3a5f; color:#60a5fa; }
  .badge-ta   { background:#3b1f5e; color:#c084fc; }
  .badge-anon { background:#1c3b2a; color:#4ade80; }
  .badge-named{ background:#374151; color:#9ca3af; }

  /* stars */
  .stars { color:var(--amber); font-size:14px; letter-spacing:1px; }

  /* skeleton */
  .skel { background:linear-gradient(90deg,var(--surface2) 25%,var(--surface) 50%,var(--surface2) 75%); background-size:400%; animation:shimmer 1.4s infinite; border-radius:4px; }
  @keyframes shimmer { 0%{background-position:100%} 100%{background-position:-100%} }
  .skel-row td { padding:14px 16px; }
  .skel-cell { height:14px; border-radius:4px; }

  /* empty */
  .adm-empty { padding:64px; text-align:center; color:var(--muted); }
  .adm-empty-icon { font-size:48px; margin-bottom:12px; }
  .adm-empty h3 { font-size:16px; font-weight:600; color:var(--text); margin-bottom:6px; }

  /* modal */
  .adm-overlay {
    position:fixed; inset:0; background:rgba(0,0,0,.65);
    display:flex; align-items:center; justify-content:center; z-index:100;
    backdrop-filter:blur(4px);
    animation:fadeIn .15s ease;
  }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  .adm-modal {
    background:var(--surface); border:1px solid var(--border);
    border-radius:12px; padding:28px; width:100%; max-width:380px;
    box-shadow:var(--shadow);
    animation:slideUp .15s ease;
  }
  @keyframes slideUp { from{transform:translateY(12px);opacity:0} to{transform:none;opacity:1} }
  .adm-modal h3 { font-size:16px; font-weight:700; margin-bottom:8px; }
  .adm-modal p { font-size:13px; color:var(--muted); margin-bottom:20px; line-height:1.6; }
  .adm-modal-actions { display:flex; gap:10px; justify-content:flex-end; }

  /* error */
  .adm-error {
    background:#3b1212; border:1px solid #b91c1c;
    color:#fca5a5; border-radius:8px; padding:12px 16px;
    font-size:13px; margin-bottom:20px;
  }

  @media(max-width:768px) {
    .adm-sidebar {
      position: fixed; top: 0; left: -240px; z-index: 1000;
      transition: left 0.3s ease; height: 100vh;
      box-shadow: 4px 0 24px rgba(0,0,0,0.5);
    }
    .adm-sidebar.open { left: 0; }
    .adm-body { padding:16px 12px; }
    .adm-topbar { padding:14px 16px; }
    .adm-toolbar { flex-direction: column; align-items: stretch; }
    .adm-search { max-width: 100%; min-width: auto; }
    .adm-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
    .adm-stats { grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .adm-stat { padding: 14px; }
    .adm-stat-value { font-size: 22px; }
  }
`;

/* ─────────────────────────── helpers ─────────────────────────── */
function Stars({ n }) {
  const num = Number(n) || 0;
  return (
    <span className="stars" title={`${num}/5`}>
      {'★'.repeat(num)}{'☆'.repeat(Math.max(0, 5 - num))}
    </span>
  );
}

function Badge({ children, className }) {
  return <span className={`badge ${className}`}>{children}</span>;
}

function SkeletonRows({ count = 6 }) {
  return Array.from({ length: count }).map((_, i) => (
    <tr key={i} className="skel-row">
      <td><div className="skel skel-cell" style={{ width: '90px' }} /></td>
      <td><div className="skel skel-cell" style={{ width: '50px' }} /></td>
      <td><div className="skel skel-cell" style={{ width: '100px' }} /></td>
      <td><div className="skel skel-cell" style={{ width: '70px' }} /></td>
      <td><div className="skel skel-cell" style={{ width: '120px' }} /></td>
      <td><div className="skel skel-cell" style={{ width: '30px' }} /></td>
      <td><div className="skel skel-cell" style={{ width: '160px' }} /></td>
      <td><div className="skel skel-cell" style={{ width: '60px' }} /></td>
    </tr>
  ));
}

function formatDate(str) {
  try {
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true,
    }).format(new Date(str));
  } catch {
    return str;
  }
}

function avgRating(items) {
  const rated = items.filter((i) => i.rating);
  if (!rated.length) return '—';
  return (rated.reduce((s, i) => s + Number(i.rating), 0) / rated.length).toFixed(1);
}

function todayCount(items) {
  const today = new Date().toDateString();
  return items.filter((i) => new Date(i.created_at).toDateString() === today).length;
}

/* ─────────────────────────── component ─────────────────────────── */
export default function AdminPage() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteTarget, setDeleteTarget] = useState(null); // id to confirm delete
  const [deleting, setDeleting] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const refresh = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      setItems(await getFeedback());
    } catch (err) {
      setError(err.message || 'Unable to load feedback.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return items;
    return items.filter((item) =>
      [item.name, item.rating, item.feedback_type, item.message, item.language]
        .filter(Boolean).join(' ').toLowerCase().includes(value),
    );
  }, [items, query]);

  async function confirmDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await deleteFeedback(deleteTarget);
      setDeleteTarget(null);
      await refresh();
    } catch (err) {
      setError(err.message || 'Delete failed.');
    } finally {
      setDeleting(false);
    }
  }

  return (
    <>
      <style>{CSS}</style>

      {/* ── Delete confirmation modal ── */}
      {deleteTarget && (
        <div className="adm-overlay" onClick={() => setDeleteTarget(null)}>
          <div className="adm-modal" onClick={(e) => e.stopPropagation()}>
            <h3>🗑 Delete Feedback</h3>
            <p>This action is permanent and cannot be undone. Are you sure you want to delete this feedback entry?</p>
            <div className="adm-modal-actions">
              <button className="adm-btn adm-btn-ghost" onClick={() => setDeleteTarget(null)}>
                Cancel
              </button>
              <button className="adm-btn adm-btn-danger" onClick={confirmDelete} disabled={deleting}>
                {deleting ? 'Deleting…' : 'Yes, Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="adm-overlay"
          style={{ zIndex: 999 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="adm-root">
        {/* ── Sidebar ── */}
        <aside className={`adm-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="adm-logo">
            <div className="adm-logo-icon">🏛</div>
            <div>
              <h2>Kovalam</h2>
              <span>Admin Panel</span>
            </div>
          </div>
          <nav className="adm-nav">
            <div className="adm-nav-item active">💬 Feedback</div>
            <div className="adm-nav-item" style={{ marginTop: 8 }}>
              <a href="/en" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, width: '100%' }}>
                <span>🌐</span> View Site
              </a>
            </div>
          </nav>
        </aside>

        {/* ── Main ── */}
        <div className="adm-main">
          {/* Topbar */}
          <div className="adm-topbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                className="adm-btn adm-btn-ghost"
                style={{ padding: '6px 10px', fontSize: 16 }}
                onClick={() => setSidebarOpen((v) => !v)}
                aria-label="Toggle Navigation Menu"
              >
                ☰
              </button>
              <h1>Feedback Management</h1>
            </div>
            <div className="adm-topbar-right">
              <button className="adm-btn adm-btn-ghost" onClick={refresh} disabled={loading}>
                {loading ? '⏳ Loading…' : '↻ Refresh'}
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="adm-body">
            {/* Stats */}
            <div className="adm-stats">
              <div className="adm-stat">
                <span className="adm-stat-icon">📋</span>
                <span className="adm-stat-label">Total Feedback</span>
                <span className="adm-stat-value">{items.length}</span>
                <span className="adm-stat-sub">all time</span>
              </div>
              <div className="adm-stat">
                <span className="adm-stat-icon">📅</span>
                <span className="adm-stat-label">Today</span>
                <span className="adm-stat-value">{todayCount(items)}</span>
                <span className="adm-stat-sub">new entries</span>
              </div>
              <div className="adm-stat">
                <span className="adm-stat-icon">⭐</span>
                <span className="adm-stat-label">Avg Rating</span>
                <span className="adm-stat-value">{avgRating(items)}</span>
                <span className="adm-stat-sub">out of 5</span>
              </div>
              <div className="adm-stat">
                <span className="adm-stat-icon">🔍</span>
                <span className="adm-stat-label">Filtered</span>
                <span className="adm-stat-value">{filtered.length}</span>
                <span className="adm-stat-sub">matching results</span>
              </div>
            </div>

            {/* Error */}
            {error && <div className="adm-error">⚠ {error}</div>}

            {/* Toolbar */}
            <div className="adm-toolbar">
              <div className="adm-search">
                <span style={{ color: 'var(--muted)' }}>🔍</span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, rating, type, message…"
                  autoComplete="off"
                />
                {query && (
                  <button
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', fontSize: 16 }}
                    onClick={() => setQuery('')}
                  >×</button>
                )}
              </div>
            </div>

            {/* Table */}
            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Lang</th>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Type</th>
                    <th>Anon</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <SkeletonRows count={6} />
                  ) : filtered.length === 0 ? (
                    <tr>
                      <td colSpan={8}>
                        <div className="adm-empty">
                          <div className="adm-empty-icon">📭</div>
                          <h3>{query ? 'No matching feedback' : 'No feedback yet'}</h3>
                          <p>{query ? 'Try a different search term.' : 'Feedback submitted by users will appear here.'}</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filtered.map((item) => (
                      <tr key={item.id}>
                        <td style={{ color: 'var(--muted)', whiteSpace: 'nowrap', fontSize: 12 }}>
                          {formatDate(item.created_at)}
                        </td>
                        <td>
                          <Badge className={item.language === 'ta' ? 'badge-ta' : 'badge-en'}>
                            {item.language?.toUpperCase()}
                          </Badge>
                        </td>
                        <td style={{ fontWeight: 500 }}>{item.name || <span style={{ color: 'var(--muted)' }}>—</span>}</td>
                        <td>
                          {item.rating ? (
                            <Stars n={item.rating} />
                          ) : (
                            <span style={{ color: 'var(--muted)' }}>—</span>
                          )}
                        </td>
                        <td>
                          {item.feedback_type ? (
                            <Badge className="badge-named">{item.feedback_type}</Badge>
                          ) : (
                            <span style={{ color: 'var(--muted)' }}>—</span>
                          )}
                        </td>
                        <td>
                          {item.anonymous
                            ? <Badge className="badge-anon">Yes</Badge>
                            : <Badge className="badge-named">No</Badge>}
                        </td>
                        <td style={{ maxWidth: 260, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: 'var(--muted)' }}>
                          {item.message || '—'}
                        </td>
                        <td>
                          <button
                            className="adm-btn adm-btn-danger adm-btn-sm"
                            onClick={() => setDeleteTarget(item.id)}
                          >
                            🗑 Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {!loading && filtered.length > 0 && (
              <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 12, textAlign: 'right' }}>
                Showing {filtered.length} of {items.length} entries
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}